module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),    
    jshint: {
      files: ['src/core/**/*.js', 'test/**/*.js']
    },
    // BOWER
    bower: {
      install: {
        options: {
          targetDir: './bower_components'
        }
      }
    },
    // KARMA TASK CONFIG
    karma: {
      options: {
          basePath: './',
          frameworks: ['jasmine'],
          files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'dist/awesome-range-slider.min.js',
            /*'src/core/ng-slider.js',
            'src/core/config/constants.js',
            'src/core/model/draggable.factory.js',
            'src/core/model/pointer.factory.js',
            'src/core/model/slider.factory.js',
            'src/core/utils/utils.factory.js',
            'src/core/template/slider.tmpl.js',*/
            'dist/css/awesome-range-slider.min.css',
            'test/**/*Spec.js'
          ],
          autoWatch: true,
          singleRun: true
      },
      unit: {
          options: {
              browsers: ['PhantomJS']                
          }
      },
      captureTimeout: 20000,
      continuous: {
          options: {
              browsers: ['PhantomJS']                
          }
      }
    },
    // LESS CSS TASKS
    less: {
      development: {
        options: {
          paths: ['src/css/less/']
        },
        files: {
          'src/css/awesome-range-slider.css': 'src/css/less/main.less'
        }
      }
    },
    // UGLIFY TASK
    uglify: {
      task1: {
         options: {
            preserveComments: 'some',
            report: 'min',
            banner: '/** \n* @license <%= pkg.name %> - v<%= pkg.version %>\n' + 
             '* (c) 2013 Kanagu https://github.com/kanagukrs/awesome-range-slider\n' +
             '* License: MIT \n**/\n'
         },         
         files: {
             'dist/awesome-range-slider.min.js': [
              'src/core/awesome-range-slider.js',
              'src/core/config/constants.js',
              'src/core/utils/utils.factory.js',
              'src/core/model/draggable.factory.js', 
              'src/core/model/pointer.factory.js',
              'src/core/model/slider.factory.js',
              'src/core/template/slider.tmpl.js'
              ]
             /*'dist/awesome-range-slider.tmpl.min.js': ['src/awesome-range-slider.tmpl.js']*/
         }
       }
     },
     // MINIFY CSS
    cssmin: {
      options: {
        keepSpecialComments: false,
        banner: '/** \n* @license <%= pkg.name %> - v<%= pkg.version %>\n' + 
             '* (c) 2013 Kanagu https://github.com/kanagukrs/awesome-range-slider\n' +
             '* License: MIT \n**/\n'
      },
      compress: {
        files: {          
          'dist/css/awesome-range-slider.min.css': ['src/css/awesome-range-slider.css']
        }
      }
    },
    // COPY CONTENT
    copy: {
      main: {
        files: [
          // slider
          {expand: true, flatten: true, src: ['src/img/*'], dest: 'dist/img/'},          
        ]
      }
    },
});

  // LOAD PLUGINS  
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');    
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-karma');
  
  // TASK REGISTER
  //grunt.registerTask('default', ['jshint', 'cssmin', 'uglify:task1', 'karma']);
  grunt.registerTask('default', ['bower', 'copy', 'less', 'cssmin', 'jshint', 'uglify:task1']);
  grunt.registerTask('test-continuous', ['jshint', 'bower', 'karma:unit']);
};
