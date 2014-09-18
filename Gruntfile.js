module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  uglify: {
    my_target: {
      files: {
        'minjs/app.min.js': ['js/foundation.min.js','js/scrollReveal.min.js','js/smooth-scroll.js','js/modernizr.js','js/component.js','js/app.js']
      }
    }
  },
    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },
    htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'final/index.html': 'index.html'
      }
    },
    dev: {                                       // Another target
      files: {
        'dev/index.html': 'index.html'
      }
    }
  },


    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['htmlmin','uglify','build','watch']);
}