'use strict';
const generators = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = generators.Base.extend({

  prompting() {
    // Have generators greet the user.
    this.log(yosay(
      'Welcome to the classy ' + chalk.red('generator-karma-gulp-browserify') + ' generator!'
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
  },

  writing: {

    packageJSON() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name,
          description: this.props.description
        }
      );
    },

    app() {
      this.fs.copy(
        this.templatePath('app'),
        this.destinationPath('app')
      );
    },

    gulpfile() {
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
    },

    tasks() {
      this.fs.copy(
        this.templatePath('gulp'),
        this.destinationPath('gulp')
      );
    },

    test() {
      this.fs.copy(
        this.templatePath('test'),
        this.destinationPath('test')
      );
    },

    babel() {
      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );
    },

    readme() {
      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'), {
          author: this.props.author,
          name: this.props.name,
          description: this.props.description
        }
      );
    }
  },

  install() {
    this.npmInstall();
  }
});
