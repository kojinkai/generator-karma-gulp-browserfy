const istanbul = require('browserify-istanbul');
const isparta  = require('isparta');

module.exports = config => {

  config.set({

    basePath: '../',

    singleRun: true,

    frameworks: ['jasmine', 'browserify'],

    preprocessors: {
      'app/*.js': ['browserify'],
      'app/*.spec.js': ['browserify']
    },

    browsers: ['PhantomJS'],

    reporters: ['progress', 'coverage'],

    autoWatch: true,

    browserify: {
      debug: true,
      extensions: ['.js'],
      transform: [
        'babelify',
        istanbul({
          instrumenter: isparta,
          ignore: ['**/node_modules/**', '**/test/**']
        })
      ]
    },

    urlRoot: '/__karma__/',

    files: [
      // app-specific code
      'app/*.js'
    ]

  });

};
