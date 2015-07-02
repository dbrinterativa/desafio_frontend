module.exports = function(grunt) {
	'use strict';
 
	// configuração do projeto
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		min: {
			dist: {
				src: ['src/js/main.js'],
				dest: 'src/js/all.min.js'
			}
		},
		cssmin: {
			dist: {
				src: ['src/css/main.css'],
				dest: 'src/css/all.min.css'
			}
		},
		jshint: {
			all: ['src/js/*.js']
		}
	};
 
	grunt.initConfig(gruntConfig);
 
	// carregando plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
 
	// tarefas
	grunt.registerTask('default', ['jshint']);

	//SASS
	grunt.loadNpmTasks('grunt-contrib-sass');
};