const gulp = require('gulp');
const config = require('../config');

gulp.task('watch', () => {
  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.scripts.src, ['eslint']);
});
