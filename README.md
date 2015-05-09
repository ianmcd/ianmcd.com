##ianmcd.com
This is the full source code for [ianmcd.com](http://ianmcd.com) (in development).

###browser support
I've opted to only support the last 2 versions of any browser.  Primary visitors and targetted audience will be designers, developers or those working within our industry, so browsers should be pretty up-to-date in most cases.  This will also allow me to work with newer technology that I wouldn't otherwise get to use on a day-to-day basis.

###dev environment
I use [grunt](https://github.com/gruntjs/grunt) to streamline a variety of tasks and to view & test things on a local server with livereload.  I use the following [packages](https://github.com/ianmcd/ianmcd.com/blob/master/package.json):
* [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) &ndash; auto load grunt tasks
* [time-grunt](https://github.com/sindresorhus/time-grunt) &ndash; display execution time of grunt tasks
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) &ndash; watches for file changes and runs appropriate tasks
* [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) &ndash; local web server
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) &ndash; js linter
* [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) &ndash; pretty reporting for jshint
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) &ndash; minify js files
* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) &ndash; concatenates js files
* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) &ndash; sass css preprocessor
* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint) &ndash; scss linter
* [autoprefixer](https://github.com/postcss/autoprefixer) &ndash; css autoprefixer
* [autoprefixer-core](https://github.com/postcss/autoprefixer-core) &ndash; autoprefixer core
* [grunt-postcss](https://github.com/nDmitry/grunt-postcss) &ndash; runs autoprefixer after css file is processed
* [grunt-tinypng](https://github.com/marrone/grunt-tinypng) &ndash; compression for jpg and png files using tinypng.com api
* [grunt-newer](https://github.com/tschaub/grunt-newer) &ndash; used with tinypng to prevent processing the same file multiple times

###js libraries
* [jquery](https://jquery.com/) &ndash; version 2.1.4
