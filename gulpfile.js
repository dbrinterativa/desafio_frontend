const   gulp         = require('gulp'),
        del          = require('del'),
        rename       = require('gulp-rename'),
        sass         = require('gulp-sass'),
        rucksack     = require('gulp-rucksack'),
        autoprefixer = require('gulp-autoprefixer'),
        browserSync  = require('browser-sync'),
        runSequence  = require('run-sequence'),
        reload       = browserSync.reload;


const   paths = [
    'dev/assets','dev/assets/**/*.*',
    'dev/assets/videos','dev/assets/videos/**/*.*',
    'dev/font','dev/font/**/*.*',
    'dev/img','dev/img/**/*.*',
    'dev/scripts/vendor/', 'dev/scripts/vendor/*.*',
    'dev/','dev/*.html'
];


const   watch_paths = [
    'dev/assets/**/*.*',
    'dev/font/**/*.*',
    'dev/img/**/*.*',
    'dev/*.html',
    'dev/css/**/*.*',
    'dev/scripts/**/*.*'
];

const AUTOPREFIXER_BROWSERS = [
    'ie >= 8',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.2',
    'bb >= 10'
];

gulp.task('clear', del.bind(null, ['build/*'], {dot: true}));

gulp.task('copy', () => {
    return gulp.src(paths, {base: './dev'})
            .pipe(gulp.dest('./build'));
});

gulp.task('css', () => {
    return gulp.src('./dev/css/main.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(rucksack({'fallbacks': true}))
            .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
            .pipe(rename('main.min.css'))
            .pipe(gulp.dest('build/css/'));
});

gulp.task('js', () => {
    return gulp.src(['dev/scripts/*.js'])
            .pipe(gulp.dest('build/scripts/'));
});

gulp.task('serve:dev', ['dev'], () => {
    browserSync({
        notify: true,
        logPrefix: 'WSK',
        server: 'build/'
    });

    var watcher = gulp.watch(watch_paths, ['dev', reload]);

    watcher.on('change', (event) => {
        console.log('File '+event.path+' was '+event.type+', running tasks...');
    });
});

gulp.task('dev', (cb) => {
    runSequence('clear', ['copy', 'css', 'js'], cb);
});

gulp.task('default', ['dev']);
