const gulp = require('gulp');
const config = require('../config');

gulp.task('watch', () => {
  gulp.watch(config.scripts.src, ['eslint']);
});
