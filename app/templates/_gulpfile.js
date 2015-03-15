var gulp = require('gulp');
var shell = require('gulp-shell');
var webserver = require('gulp-webserver');

gulp.task('default', shell.task([
  'rm -rf src/lib',
  'git clone https://github.com/angular/quickstart.git src/lib',
  'cd src/lib',
  'rm -rf .git',
  'cd ../..'
]));

gulp.task('serve', function() {
  gulp.src('src')
    .pipe(webserver({
      open: true
    }));
});