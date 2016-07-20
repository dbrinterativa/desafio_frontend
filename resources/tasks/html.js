var gulp        = require('gulp');
var gulpIf      = require('gulp-if');
var htmlMin     = require('gulp-htmlmin');

module.exports = function (args, src, dest, reload) {

	/**
	 * Minifica os templates HTML
	 */
	gulp.task('html', function() {
		return gulp.src('./resources/views/*.html')
		.pipe(gulpIf(args.prod, htmlMin({
			collapseWhitespace: true,
			includeAutoGeneratedTags: false,
			removeComments: true
		})))
		.pipe(gulp.dest('./public/'));
	});

	/**
	 * HTML Watch
	 */
	gulp.task('watchHtml', function() {
		return gulp.watch('./resources/views/*.html', ['html'])
		.on('change', reload, function(event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
	});
};