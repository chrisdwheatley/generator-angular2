'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Yeoman greeting
    this.log(yosay(
      'Yo! I\'m here to help build your ' + chalk.red('Angular2') + ' application.'
    ));

    var prompts = [{
      type: 'list',
      name: 'transpiler',
      message: 'Which transpiler would you like to use?',
      default: 'Babel',
      choices: ['Babel', 'Traceur']
    }];

    this.prompt(prompts, function (props) {
      this.transpiler = props.transpiler;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
