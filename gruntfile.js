module.exports = function( grunt ) {

  "use strict";

  grunt.initConfig({

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        expand: true,
        cwd: 'app',
        src: ['*.html'],
        dest: 'app/dist'
      }
    }, // htmlmin



    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'app/dist/css/style.css' : 'app/assets/_sass/style.scss'
        }
      }
    }, // sass 



    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'app/dist/js/main.js' : [ 'app/assets/_js/script.js' ]
        }
      }
    }, // uglify



    imagemin: {
      png: {
          options: {
              optimizationLevel: 7
          },
          files: [
              {
                  expand: true,
                  cwd: './app/images/',
                  src: ['**/*.png'],
                  dest: './app/dist/images',
                  ext: '.png'
              }
          ]
      },
      jpg: {
          options: {
              progressive: true
          },
          files: [
              {
                  expand: true,
                  cwd: './app/images/',
                  src: ['**/*.jpg'],
                  dest: './app/dist/images',
                  ext: '.jpg'
              }
          ]
      }
    }, // imagemin

    watch : {
      dist : {
        files : [
          'app/assets/_js/**/*',
          'app/assets/_sass/**/*',
          'app/images/**/*',
          'app/*.html'
        ],

        tasks : [ 'htmlmin', 'uglify', 'sass', 'copy' ]
      }
    }, // watch

    copy: {
      main: {
        files: [
          {
            cwd: 'app/fonts',  // set working folder / root to copy
            src: '**/*',           // copy all files and subfolders
            dest: 'app/dist/fonts',    // destination folder
            expand: true           // required when using cwd
          },

          { 
            cwd: 'app',
            src: ['apple-touch-icon-precomposed.png', '.htaccess', '*.txt', 'manutencao.html', 'manifest.webapp'],
            dest:'app/dist',
            expand: true 
          },

          { 
            cwd: 'app/assets/_js',
            src: [
              'modernizr.min.js',
            ],
            dest:'app/dist/js',
            expand: true 
          },
          
          { 
            cwd: 'app/images/',
            src: ['*.svg', '*.ico'],
            dest:'app/dist/images',
            expand: true 
          },
        ]
      }
    }, // copy

    browserSync: {
      dev: {
          bsFiles: {
            src : [
            'app/dist/**/*',
            ]
          },
          options: {
            proxy: "localhost/Projetos/dbr/app/dist/"
          }
      }
    }, // Browser-sync: sync navigation and file changes


    'ftp-deploy': {
      build: {
        auth: {
          host: 'ftp.host', // host do servidor
          // port: 21,
          authKey: 'key1' // key do arquivo de password do plugin
        },
        src: 'app/dist/', // Pasta de onde serão enviados os arquivos
        dest: '/', // Pasta de destino no servidor Ex.: Httpdocs/Public_html
        // exclusions: ['path/to/source/folder/**/.DS_Store', 'path/to/source/folder/**/Thumbs.db', 'path/to/dist/tmp']
      }
    }, //ftp deploy

  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-htmlmin' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-copy' );
  grunt.loadNpmTasks( 'grunt-browser-sync' );
  grunt.loadNpmTasks( ' grunt-ftp-deploy' );
  


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'htmlmin', 'sass', 'uglify', 'copy' ] );

  // Tarefa para Watch
  grunt.registerTask( 'img', [ 'imagemin' ] );

  // run serve
  grunt.registerTask( 'serve', [ 'browserSync' ] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

  // Deploy -  Mandando os arquivos de /dist para o servidor
  grunt.registerTask( 'deploy', [ 'ftp-deploy' ] );

};