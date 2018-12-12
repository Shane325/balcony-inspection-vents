'use strict'

let gulp = require('gulp')
let autoprefixer = require('gulp-autoprefixer')
let cssnano = require('gulp-cssnano')
let uglify = require('gulp-uglify')
let concat = require('gulp-concat')
let imagemin = require('gulp-imagemin')
let rename = require('gulp-rename')
let runSequence = require('run-sequence')
let nodemon = require('gulp-nodemon')
let del = require('del')
let gutil = require('gulp-util')

// Start:prod
gulp.task('start:prod', function () {
  nodemon({
    script: 'server.js',
    env: {
      'NODE_ENV': 'production'
    }
  })
})

// Start
gulp.task('start', function () {
  nodemon({
    script: 'server.js',
    env: {
      'NODE_ENV': 'development'
    }
  })
})

// Styles
gulp.task('styles', function () {
  return gulp.src('public/css/**/*.css')
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/dist/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('public/dist/css'))
})

// Scripts
gulp.task('scripts', function () {
  return gulp.src(['public/js/**/*.js'])
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js'))
})

// Images
gulp.task('images', function () {
  return gulp.src('public/images/**/*')
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('public/dist/images'))
})

// Clean
gulp.task('clean', function () {
  return del(['public/dist/images', 'public/dist/fonts', 'public/dist'])
})

// Run the project in production mode
gulp.task('prod', function (done) {
  runSequence('clean', ['styles', 'scripts', 'images'], 'start:prod', done)
})

// Run the project in development / default mode
gulp.task('default', function (done) {
  runSequence('clean', 'start', done)
})
