const gulp = require('gulp');
const path = require('path');
const del = require('del');
const index = require('gulp-index');
const jest = require('gulp-jest').default;
const insertSpaces = require('./src/insertSpaces');
const formatFileUrl = require('./src/formatFileUrl');


// loading reveal
function genRevealTask(str) {
  const RevealJsIndexPath = require.resolve('reveal.js');
  const RevealJsDirectory = path.resolve(RevealJsIndexPath, '..', '..');

  return function() {
    const glob = path.join(RevealJsDirectory, str, '**', '*.*');
    const dest = path.join('public/assets/reveal', str);
    return gulp.src(glob).pipe(gulp.dest(dest));
  }
}
// Could these params be an array?
gulp.task('reveal:js', genRevealTask('js'));
gulp.task('reveal:css', genRevealTask('css'));
gulp.task('reveal:lib', genRevealTask('lib'));
gulp.task('reveal:plugin', genRevealTask('plugin'));

/*
gulp.task('reveal:css', function)
*/
gulp.task('clean', function() {
  return del(['public/index.html', 'public/assets/*']);
});

gulp.task('test', function() {
  return gulp.src('__tests__').pipe(jest());
});

// see https://github.com/lee-chase/gulp-index#readme for options

gulp.task('html:buildIndex', function() {
  return gulp.src('./public/**/*.?(md|html)')
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
      'section-heading-template': (heading) => {
        if (!heading) return '';
        const formatedHeading = insertSpaces(heading);
        return `<section>${formatedHeading}</section>`;
      },
      'item-template': (filepath, filename) => {
        const href = formatFileUrl(filepath, filename);
        const nameWithOutPath = formatFileUrl('', filename);
        const text = insertSpaces(nameWithOutPath);
        return `<li><a href="${href}">${text}</a></li>
        `;
      },
      outputFile: './index.html',
      'tab-depth': 1,
      'tab-string': '  ',
      relativePath: './public/',
      'pathDepth': 1,
  }))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', gulp.series('clean', 'test', 'html:buildIndex', gulp.parallel('reveal:js', 'reveal:css', 'reveal:lib', 'reveal:plugin')));
