var gulp     = require('gulp');
var gulpIf   = require('gulp-if');
var imageMin = require('gulp-imagemin');

module.exports = function (args, src, dest, reload) {

	/**
	 * Copia/minifica imagens
	 */
	gulp.task('images', function() {
		return gulp.src(src + 'img/*')
		.pipe(gulpIf(args.prod, imageMin()))
		.pipe(gulp.dest(dest + 'img'));
	});

	/**
	 * Copia fontes
	 */
	gulp.task('fonts', function() {
		return gulp.src(src + 'fonts/*')
		.pipe(gulp.dest(dest + 'fonts'));
	});
};