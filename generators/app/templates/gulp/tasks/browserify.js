const gulp         = require('gulp');
const source       = require('vinyl-source-stream');
const watchify     = require('watchify');
const browserify   = require('browserify');
const babelify     = require('babelify');
const handleErrors = require('../util/handleErrors');
const bundleLogger = require('../util/bundleLogger');
const config       = require('../config');

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {

  const bundler = browserify({
    entries: [config.sourceDir + file],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  function rebundle() {

    bundleLogger.start();

    const stream = bundler.bundle();

    return stream
      .on('error', handleErrors)
      .on('end', bundleLogger.end)
      .pipe(source(file))
      .pipe(gulp.dest(config.scripts.dest));
  }

  bundler = watchify(bundler);
  bundler.transform(babelify, {});
  bundler.on('update', rebundle);

  return rebundle();

}

gulp.task('browserify', () => {

  return buildScript('adder.js');

});
