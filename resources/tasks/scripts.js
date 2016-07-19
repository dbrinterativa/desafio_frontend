var gulp    = require('gulp');
var concat  = require('gulp-concat');
var gulpIf  = require('gulp-if');
var uglify  = require('gulp-uglify');
var notify  = require("gulp-notify");
var plumber = require('gulp-plumber');

module.exports = function (args, src, dest, reload) {

	/**
	 * Minifica e concatena arquivos Javascript
	 */
	gulp.task('scripts', function() {
		var source = [
			'./bower_components/jquery/dist/jquery.js',
			src + 'js/*.js'
		];

		return gulp.src(source)
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(gulpIf(args.prod, uglify()))
		.pipe(concat('app.js'))
		.pipe(notify("Found file: <%= file.relative %>!"))
		.pipe(gulp.dest(dest + 'js/'));
	});

	/**
	 * JS Watch
	 */
	gulp.task('watchScripts', function() {
		return gulp.watch(src + 'js/*.js', ['scripts'])
		.on('change', reload, function(event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
	});
};