module.exports = {

  browserPort: 3000,
  UIPort: 3001,
  testPort: 3002,

  sourceDir: './app/',
  buildDir: './build/',

  scripts: {
    entry: 'adder.js',
    src: 'app/**/*.js',
    dest: 'build/js',
    test: 'test/**/*.js',
    gulp: 'gulp/**/*.js'
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js'
  },

  eslint: {
    src: ['gulp/**/*.js', 'test/karma.conf.js', 'app/**/*.js']
  }

};
