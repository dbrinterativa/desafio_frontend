var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

//CSS
gulp.task('sass', function() {
	console.log('Building CSS...');
	return gulp.src('app/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
	stream: true
	}))
});

//TEMPLATES
gulp.task('templates', function(){
	console.log('Copying templates...');
	return gulp.src('app/templates/*')
	.pipe(gulp.dest('dist/templates'))
})

//FONTS
gulp.task('fonts', function(){
	console.log('Copying fonts...');
	return gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
})

//OPTIMGS
gulp.task('images', function(){
	console.log('Optimizing images...');
	return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
	.pipe(cache(imagemin({
	interlaced: true
    })))
	.pipe(gulp.dest('dist/images'))
});

//MINIFY
gulp.task('useref', function(){
	console.log('Minifying resources and building index...');
	return gulp.src('app/*.html')
	.pipe(useref())
	.pipe(gulpIf('*.js', uglify()))
	.pipe(gulpIf('*.css', cssnano()))    
	.pipe(gulp.dest('dist'))
});

//REFRESHME
gulp.task('go', ['browserSync', 'sass', 'useref', 'fonts', 'images', 'templates'], function (){
	console.log('Prod build finished, running server!');
	gulp.watch('app/sass/*.scss', ['sass', 'useref', browserSync.reload]); 
	gulp.watch('app/*.html', ['useref', browserSync.reload]);
	gulp.watch('app/templates/*.html', ['templates', browserSync.reload]); 
	gulp.watch('app/js/*.js', ['useref', browserSync.reload]); 
});

gulp.task('browserSync', function() {
	console.log('Initializing...');
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

