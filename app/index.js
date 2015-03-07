'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    // this.npmInstall(['angular2'], { 'saveDev': true });
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
      if (this.transpiler === 'Babel') {
        this.npmInstall(['babel'], { 'saveDev': true });
      } else if (this.transpiler === 'Traceur') {
        this.npmInstall(['traceur'], { 'saveDev': true });
      }
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
    }
  },

  install: function () {
    this.installDependencies({
      bower: false,
      skipInstall: this.options['skip-install']
    });
  }
});
