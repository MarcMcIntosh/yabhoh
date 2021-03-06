const gulp = require('gulp');
const del = require('del');
const index = require('gulp-index');
const jest = require('gulp-jest').default;
const insertSpaces = require('./src/insertSpaces');
const formatFileUrl = require('./src/formatFileUrl');

gulp.task('clean', function() {
  return del(['public/index.html']);
});

gulp.task('test', function() {
  return gulp.src('__tests__').pipe(jest());
});

// see https://github.com/lee-chase/gulp-index#readme for options

gulp.task('html:buildIndex', function() {
  return gulp.src('./public/*.md')
    .pipe(index({
      'prepend-to-output': () => `<head>
        <meta title="Yet on other blog hosted on here" />
        <base href="/yabhoh/" />
    </head>
    <body>`,
      'append-to-output': () => '</body>',
      'title': 'Welcome',
      'title-template': (title) =>`<h1>${title}</h1>`,
      'list-template': (listContent) => `<ul>${listContent}</ul>`,
      'section-heading-template': () => '',
      'item-template': (filepath, filename) => {
        const href = formatFileUrl(filepath, filename);
        const text = insertSpaces(formatFileUrl('', filename));
        return `<li><a href="${href}">${text}</a></li>
        `;
      },
      outputFile: './index.html',
      'tab-depth': 0,
      'tab-string': '  ',
      relativePath: './public/',
  }))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['test', 'html:buildIndex']);
