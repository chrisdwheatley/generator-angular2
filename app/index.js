'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    // add option to skip install
    this.option('skip-install');
  },
  
  prompting: function () {
    var done = this.async();

    // Yeoman greeting
    this.log(yosay(
      'Yo! I\'m here to help build your '+
      chalk.red('Angular2') +
      ' application.'
    ));

    var prompts = [
      {
        type: 'list',
        name: 'transpiler',
        message: 'Which es6 to es5 transpiler would you like to use?',
        default: 'Babel',
        choices: ['Babel', 'Traceur']
      }
    ];

    this.prompt(prompts, function (response) {
      this.transpiler = response.transpiler.toLowerCase();

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.copy('_package.json', 'package.json');
      this.mkdir('src');
      this.copy('src/_index.es6', 'src/index.es6');
      this.copy('src/_index.html', 'src/index.html');
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
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});
