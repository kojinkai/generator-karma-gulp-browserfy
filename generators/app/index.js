'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = generators.Base.extend({
  prompting: function () {
    // Have generators greet the user.
    this.log(yosay(
      'Welcome to the classy ' + chalk.red('generator-karma-gulp-browserify') + ' generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'name',
        message: 'Enter project name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
        default: 'my karma-gulp-browserify harness'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: {

    packageJSON: function() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name,
          description: this.props.description
        }
      );
    },

    app: function () {
      this.fs.copy(
        this.templatePath('app'),
        this.destinationPath('app')
      ); 
    },

    gulpfile: function() {
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
    },

    tasks: function () {
      this.fs.copy(
        this.templatePath('gulp'),
        this.destinationPath('gulp')
      ); 
    },

    test: function () {
      this.fs.copy(
        this.templatePath('test'),
        this.destinationPath('test')
      ); 
    },

    eslint: function () {
      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
    },

    babel: function () {
      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );
    }     
  },

  install: function () {
    this.npmInstall();
  }
});
