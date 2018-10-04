const gulp = require('gulp');
const del = require('del');
var index = require('gulp-index');

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('build:HTML', function({
  relativePath: './src/client',
}) {
  return gulp.src('./posts/*.md')
    .pipe(index())
    .pipe(gulp.dest('./dist'));
});

gulp('default', ['build:HTML']);
