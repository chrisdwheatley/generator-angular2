var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var shell = require('gulp-shell');
var traceur = require('gulp-traceur');
var webserver = require('gulp-webserver');

// run everything needed to get things going
gulp.task('default', ['dependencies', 'angular2', 'js', 'html']);

gulp.task('dependencies', function() {
  return gulp.src([
      'node_modules/angular2/node_modules/rx/dist/rx.all.js',
      'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
      'node_modules/angular2/node_modules/zone.js/zone.js',
      'node_modules/es6-module-loader/dist/es6-module-loader.js',
      'node_modules/es6-module-loader/dist/es6-module-loader.js.map',
      'node_modules/systemjs/dist/system.js',
      'node_modules/systemjs/dist/system.js.map'
    ])
    .pipe(gulp.dest('build/lib'));
});

// transiple & concat angular2
gulp.task('angular2', function() {
  return gulp.src([
      traceur.RUNTIME_PATH,
      'node_modules/angular2/es6/prod/*.es6',
      'node_modules/angular2/es6/prod/src/**/*.es6'
    ], {
      base: 'node_modules/angular2/es6/prod'
    })
    .pipe(rename(function(path) {
      path.dirname = 'angular2/' + path.dirname;
      path.extname = '';
    }))
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true
    }))
    .pipe(concat('angular2.js'))
    .pipe(gulp.dest('build/lib'));
});

// transiple own code
gulp.task('js', function() {
  return gulp.src('src/*.js')
    .pipe(rename({
      extname: ''
    }))
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('build'));
});

// move html & css into build dir
gulp.task('static', function() {
  return gulp.src([
      'src/**/*.html',
      'src/**/*.css'
    ])
    .pipe(gulp.dest('build'))
});

// serve the build dir
gulp.task('serve', function() {
  return gulp.src('build')
    .pipe(webserver({
      open: true
    }));
});
