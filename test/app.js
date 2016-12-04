'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-karma-gulp-browserify-update:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true})
      .toPromise();
  });

  it('creates the app files', function () {
    assert.file([
      'app/adder.js',
      'app/adder.spec.js'
    ]);
  });

  it('creates the gulp files', function () {
    assert.file([
      'gulpfile.js',
      'gulp/config.js',
      'gulp/index.js',
      'gulp/util/bundleLogger.js',
      'gulp/util/handleErrors.js',
      'gulp/util/scriptFilter.js',
      'gulp/tasks/browserify.js',
      'gulp/tasks/development.js',
      'gulp/tasks/eslint.js',
      'gulp/tasks/unit.js',
      'gulp/tasks/watch.js'
    ]);
  });

  it('creates the test config', function () {
    assert.file([
      'test/karma.conf.js'
    ]);
  });

  it('creates the package.json', function () {
    assert.file([
      'package.json'
    ]);
  });

  it('creates the .babelrc', function () {
    assert.file([
      '.babelrc'
    ]);
  });
});
