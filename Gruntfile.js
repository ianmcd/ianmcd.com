/* global module, require */

module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);                   // automatically load grunt tasks
  require('time-grunt')(grunt);                         // time tracking for task processing
  var autoprefixer = require('autoprefixer-core');      // css autoprefixer

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


  // JS ITEMS

  // grunt-contrib-jshint
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')             // pretty jshint reporter
      },
      all: [
        'Gruntfile.js',
        'src/js/**/*.js',
        '!src/js/lib/**/*.js'                           // ignores /lib
      ]
    },

  // grunt-contrib-concat
    concat: {
      files: {
        src: [
          'src/js/lib/jquery.min.js',
          'src/js/lib/**/*.js',
          'src/js/**/*.js'
        ],
        dest: 'http/js/booji.js'
      }
    },

  // grunt-contrib-uglify
    uglify: {
      options: {
        sourceMap: true
      },
      files: {
        src: 'http/js/booji.js',
        dest: 'http/js/booji.min.js'
      }
    },


  // SCSS/CSS ITEMS

  // grunt-contrib-sass
    sass: {
      options: {
        style: 'compressed',
        compass: true
      },
      all: {
        files: {
          'http/css/booji.css': 'src/sass/booji.scss'
        }
      }
    },

  // grunt-scss-lint
    scsslint: {
      allFiles: [
        'src/sass/**/*.scss'
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
      all: { src: 'http/css/booji.css' }
    },


  // IMAGES

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
        cwd: 'src/img/',
        src: '**/*.png',
        dest: 'http/img/',
        ext: '.png'
      },
      jpg: {
        expand: true,
        cwd: 'src/img/',
        src: '**/*.jpg',
        dest: 'http/img/',
        ext: '.jpg'
      }
    },


  // LOCAL SERVER

  // grunt-contrib-connect
    connect: {
      options: {
        base: 'http',
        post: 4444,
        hostname: 'localhost',
        open: true,
        livereload: 35729
      }
    },

  // grunt-contrib-watch
    watch: {
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['jshint', 'concat', 'uglify']
      },
      css: {
        files: ['src/sass/**/*.scss'],
        tasks: ['scsslint', 'sass', 'postcss']
      },
      img: {
        files: ['src/img/**/*.{png,jpg,gif}'],
        tasks: ['newer:tinypng']                       // only run imagemin on new files
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['http/**/*.{html,css,js,png,jpg,gif}']
      }
    }
  });


  // TASKS

  grunt.registerTask('serve', [
    'jshint',
    'concat',
    'uglify',
    'scsslint',
    'sass',
    'postcss',
    'newer:tinypng',
    'connect',
    'watch'
  ]);

  grunt.registerTask('build', [
    'jshint',
    'concat',
    'uglify',
    'scsslint',
    'sass',
    'postcss',
    'tinypng'
  ]);
};
