'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-karma-gulp-browserify:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({someAnswer: true});
  });

  it('creates the package.json', () => {
    assert.file([
      'package.json'
    ]);
  });

  it('creates the app files', () => {
    assert.file([
      'app/adder.js',
      'app/adder.spec.js'
    ]);
  });

  it('creates the gulp files', () => {
    assert.file([
      'gulpfile.js',
      'gulp/config.js',
      'gulp/index.js',
      'gulp/util/bundleLogger.js',
      'gulp/util/handleErrors.js',
      'gulp/util/scriptFilter.js',
      'gulp/tasks/development.js',
      'gulp/tasks/eslint.js',
      'gulp/tasks/unit.js',
      'gulp/tasks/watch.js'
    ]);
  });

  it('creates the test config', () => {
    assert.file([
      'test/karma.conf.js'
    ]);
  });

  it('creates the package.json', () => {
    assert.file([
      'package.json'
    ]);
  });

  it('creates the .nvmrc', () => {
    assert.file([
      '.nvmrc'
    ]);
  });

  it('creates the .editorconfig', () => {
    assert.file([
      '.editorconfig'
    ]);
  });

  it('creates the .gitignore && .gitattributes', () => {
    assert.file([
      '.gitignore'
    ]);
    assert.file([
      '.gitattributes'
    ]);
  });
});
