/**
 * Caminho de resources e public
 */
var resources = './resources/assets/';
var public    = './public/assets/';
var tasks     = './resources/tasks/';

var clean = require('gulp-clean');
var gulp  = require('gulp');
var run   = require('run-sequence');
var glob  = require("glob");

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

/**
 * Compila arquivos para produção com a flag --prod
 */
var args = require('yargs').default('prod', false).argv;

/**
 * Carrega os módulos
 */
glob.sync(tasks + '*.js', {}).forEach(function(file) {
	require(file)(args, resources, public, reload);
});

/**
 * Limpa diretórios de produção
 */
gulp.task('clean', function() {
	var src = [public];

	return gulp.src(src)
	.pipe(clean());
});

//------------------------------------------------------------
// Tasks
//------------------------------------------------------------

/**
 * Browser Sync task
 */
gulp.task('server', ['watchHtml', 'watchStyles', 'watchScripts'], function() {
	browserSync.init({server: './public/'});
});

/**
 * Roda todas as tasks principais
 */
gulp.task('default', function(callback) {
	return run('clean', ['html', 'styles', 'scripts', 'fonts', 'images'], callback);
});

/**
 * Watch tasks
 */
gulp.task('watch', function(callback) {
	return run('watchHtml', 'watchStyles', 'watchScripts', callback);
});
