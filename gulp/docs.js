'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
gulp.task('docs', shell.task([
  'node_modules/jsdoc/jsdoc.js '+
  '-c node_modules/angular-jsdoc/common/conf.json '+   // config file
  '-t node_modules/angular-jsdoc/angular-template '+   // template file
  'README.md ' +                                       // to include README.md as index contents
  '-d docs '+                                          // output directory
  '-r src --verbose'                                   // source directory
]));