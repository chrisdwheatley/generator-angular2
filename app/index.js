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
    // Yeoman greeting
    this.log(yosay(
      'Yo! I\'m here to help build your '+
      chalk.bold.yellow('Angular2') +
      ' application.'
    ));

  },

  writing: {
    app: function () {
      this.copy('_package.json', 'package.json');
      this.copy('_gulpfile.js', 'gulpfile.js');
      this.mkdir('src');
      this.copy('src/_index.js', 'src/index.js');
      this.copy('src/_index.html', 'src/index.html');
      this.copy('src/_generator-angular2.html', 'src/generator-angular2.html');
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
      bower: false,
      callback: function() {
        this.emit('dependenciesInstalled');
      }.bind(this)
    });

    this.on('dependenciesInstalled', function() {
      this.spawnCommand('gulp').on('close', function () {
        this.log('');
        this.log('');
        this.log('Setup complete, run ' +
                 chalk.bold.yellow('gulp serve') +
                 ' to start serving the application.');
        this.log('');
        this.log('');
      }.bind(this));
    }.bind(this));

  }
});
