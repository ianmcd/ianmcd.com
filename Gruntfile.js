/* global module, require */

module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);                   // automatically load grunt tasks
  require('time-grunt')(grunt);                         // time tracking for task processing
  var autoprefixer = require('autoprefixer-core');      // css autoprefixer

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  // JS

  // grunt-contrib-concat
    concat: {
      options: {
        sourceMap: true
      },
      files: {
        src: [
          'raw/js/lib/jquery.min.js',
          'raw/js/lib/**/*.js',
          'raw/js/**/*.js'
        ],
        dest: 'static/assets/js/booji.js'
      }
    },

  // grunt-contrib-uglify
    uglify: {
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
        sourceMapIn: 'static/assets/js/booji.js.map'
      },
      files: {
        src: 'static/assets/js/booji.js',
        dest: 'static/assets/js/booji.min.js'
      }
    },


  // SCSS/CSS

  // grunt-contrib-sass
    sass: {
      options: {
        style: 'compressed',
        compass: true
      },
      all: {
        files: {
          'static/assets/css/merle.css': 'raw/sass/merle.scss'
        }
      }
    },

  // grunt-scss-lint
    scsslint: {
      allFiles: [
        'raw/sass/**/*.scss'
      ],
      options: {
        config: '.scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true
      }
    },

  // grunt-postcss
    postcss: {
      options: {
        processors: [
          autoprefixer({ browsers: ['last 2 version'] }).postcss
        ],
        map: true
      },
      all: { src: 'static/assets/css/merle.css' }
    },


  // IMAGES

  // grunt-responsive-images
    responsive_images: {
      allFiles: {
        options: {
          sizes: [{
            name: 'min',
            width: '50%'
          },{
            name: 'min',
            width: '100%',
            suffix: '@2x'
          }]
        },
        files: [{
          expand: true,
          src: ['**.{jpg,png}'],
          cwd: 'raw/img',
          dest: 'static/assets/img'
        }]
      }
    },

  // grunt-tinypng
    tinypng: {
      options: {
        apiKey: 'ZGkTfFwW-seVEz2ZAhkfmT651H2D_th1',
        summarize: true,
        showProgress: true,
        stopOnImageError: true
      },
      png: {
        expand: true,
        cwd: 'static/assets/img/',
        src: '*.png',
        dest: 'ember/public/assets/img/',
        ext: '.png'
      },
        jpg: {
          expand: true,
          cwd: 'static/assets/img/',
          src: '*.jpg',
          dest: 'ember/public/assets/img/',
          ext: '.jpg'
        }
      },


    // LOCAL SERVER

    // grunt-contrib-connect
      connect: {
        options: {
          port: 5200,
          hostname: 'localhost',
          open: true,
          livereload: 35729
        },
        dev: {
          options: {
            base: 'static'
          }
        }
      },

    // grunt-contrib-watch
      watch: {
        js: {
          files: ['raw/js/**/*.js'],
          tasks: ['jshint', 'concat', 'uglify']
        },
        css: {
          files: ['raw/sass/**/*.scss'],
          tasks: ['scsslint', 'sass', 'postcss']
        },
        img: {
          files: ['raw/img/**/*.{png,jpg}'],
          tasks: ['newer:tinypng']      // only run on new files
        },
        livereload: {
          options: {
            livereload: true
          },
          files: ['static/**/*.{html,css,js,png,jpg}']
        }
      }
    });


    // TASKS

    grunt.registerTask('serve', [
      'concat',
      'uglify',
      'scsslint',
      'sass',
      'postcss',
      'newer:responsive_images',
      'newer:tinypng',
      'connect',
      'watch'
    ]);

    grunt.registerTask('build', [
      'concat',
      'uglify',
      'scsslint',
      'sass',
      'postcss',
      'responsive_images',
      'tinypng'
    ]);
  };
