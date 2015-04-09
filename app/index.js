'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var npmCheck = require('npm-check');
var path = require('path');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
    // add option to skip install
    this.option('skip-install');
    this.argument('appname', {
      type: String,
      required: false
    });
    this.appname = this.appname || path.basename(process.cwd());
  },

  prompting: function() {
    // Yeoman greeting
    this.log(yosay(
      'Yo! I\'m here to help build your ' +
      chalk.bold.yellow('Angular2') +
      ' application.'
    ));
  },

  writing: {
    app: function() {
      this.basicTemplate = 'src/' + this._.slugify(this.appname);

      this.copy('_package.json', 'package.json');
      this.copy('_gulpfile.js', 'gulpfile.js');
      this.copy('_readme.md', 'readme.md');
      this.copy('_editorconfig', '.editorconfig');
      this.copy('_gitignore', '.gitignore');

      this.mkdir('src');
      this.copy('src/_index.js', 'src/index.js');
      this.copy('src/_index.html', 'src/index.html');
      this.copy('src/_basic-template.html', this.basicTemplate + '.html');
      this.copy('src/_basic-template.js', this.basicTemplate + '.js');
    }
  },

  install: function() {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false,
      callback: function() {
        this.emit('dependenciesInstalled');
      }.bind(this)
    });

    this.on('dependenciesInstalled', function() {
      npmCheck({
        global: true
      }).then(function(globalPackages) {
        if (!globalPackages.gulp) {
          return './node_modules/.bin/gulp';
        }
        return 'gulp';
      }).then(function(gulpCommand) {
        this.spawnCommand(gulpCommand).on('close', function() {
          this.log('');
          this.log('');
          this.log('Setup complete, run ' +
            chalk.bold.yellow(gulpCommand + ' dev') +
            ' to start serving the application' +
            ' (it\'ll also start watching for any changes you make).');
          this.log('');
        }.bind(this));
      }.bind(this));

    }.bind(this));

  }
});
