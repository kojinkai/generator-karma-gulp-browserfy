const config = require('../config');
const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('eslint', () => {
  return gulp.src(config.eslint.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
