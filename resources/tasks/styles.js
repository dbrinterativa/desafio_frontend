var gulp     = require('gulp');
var gulpIf   = require('gulp-if');
var prefixer = require('gulp-autoprefixer');
var sass     = require('gulp-sass');
var notify   = require("gulp-notify");
var plumber  = require('gulp-plumber');

module.exports = function(args, src, dest, reload) {

	/**
	 * Compila os arquivos SASS
	 */
	gulp.task('styles', function() {
		return gulp.src(src + 'scss/*.scss')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(prefixer({
			versions: ['last 2 browsers']
		}))
		.pipe(notify("Found file: <%= file.relative %>!"))
		.pipe(gulp.dest(dest + 'css'));
	});

	/**
	 * SASS Watch
	 */
	gulp.task('watchStyles', function() {
		return gulp.watch(src + 'scss/**/*.scss', ['styles'])
		.on('change', reload, function(event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
	});
};