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

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function () {
  // Bootstrap
  gulp.src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
    .pipe(gulp.dest('public/vendor/bootstrap'))

  // Font Awesome
  gulp.src([
    './node_modules/@fortawesome/**/*'
  ])
    .pipe(gulp.dest('public/vendor'))

  // jQuery
  gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
    .pipe(gulp.dest('public/vendor/jquery'))

  // jQuery Easing
  gulp.src([
    './node_modules/jquery.easing/*.js'
  ])
    .pipe(gulp.dest('public/vendor/jquery-easing'))

  // Magnific Popup
  gulp.src([
    './node_modules/magnific-popup/dist/*'
  ])
    .pipe(gulp.dest('public/vendor/magnific-popup'))

  // Scrollreveal
  gulp.src([
    './node_modules/scrollreveal/dist/*.js'
  ])
    .pipe(gulp.dest('public/vendor/scrollreveal'))
})

// Styles
gulp.task('styles', function () {
  return gulp.src('public/css/**/*.css')
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/dist/css'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('public/dist/css'))
})

// Scripts
gulp.task('scripts', function () {
  return gulp.src(['public/js/**/*.js'])
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js'))
})

// Clean
gulp.task('clean', function () {
  return del(['public/dist'])
})

// Run the project in production mode
gulp.task('prod', function (done) {
  runSequence('clean', ['vendor', 'styles', 'scripts'], 'start:prod', done)
})

// Run the project in development / default mode
gulp.task('default', function (done) {
  runSequence('clean', 'vendor', 'start', done)
})
