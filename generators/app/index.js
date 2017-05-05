'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fine-assed ' + chalk.red('generator-karma-gulp-browserify') + ' generator!'
    ));

    const prompts = [
      {
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
      },
      {
        type: 'input',
        name: 'Author',
        message: 'Your Name'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        description: this.props.description
      }
    );

    this.fs.copy(
      this.templatePath('app'),
      this.destinationPath('app')
    );

    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );

    this.fs.copy(
      this.templatePath('gulp'),
      this.destinationPath('gulp')
    );

    this.fs.copy(
      this.templatePath('test'),
      this.destinationPath('test')
    );

    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'), {
        author: this.props.author,
        name: this.props.name,
        description: this.props.description
      }
    );
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
};
