'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('when angular2 generator generates', function() {

  before(function(done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './foo'))
      // always skip install in tests
      .withOptions({
        'skip-install': true
      })
      .on('end', done);
  });

  it('should create the required static files', function() {
    assert.file([
      'package.json',
      '.editorconfig',
      '.gitignore',
      'readme.md',
      'gulpfile.js',
      'src/index.js',
      'src/index.html'
    ]);
  });

  describe('when no arguments are passed through', function() {

    describe('when generation happens in a basic named directory', function() {
      before(function(done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './basic'))
          // always skip install in tests
          .withOptions({
            'skip-install': true
          })
          .on('end', done);
      });

      it('should create the dynamically named files named correctly', function() {
        assert.file([
          'src/basic.js',
          'src/basic.html'
        ]);
      });
    });

    describe('when generation happens in a dashed named directory', function() {
      before(function(done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './dash-named'))
          // always skip install in tests
          .withOptions({
            'skip-install': true
          })
          .on('end', done);
      });

      it('should create the dynamically named files named correctly', function() {
        assert.file([
          'src/dash-named.js',
          'src/dash-named.html'
        ]);
      });
    });

    describe('when generation happens in a case named directory', function() {
      before(function(done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './caseNamed'))
          // always skip install in tests
          .withOptions({
            'skip-install': true
          })
          // .withArguments('fake-app-name')
          .on('end', done);
      });

      it('should create the dynamically named files named correctly', function() {
        assert.file([
          'src/casenamed.js',
          'src/casenamed.html'
        ]);
      });
    });

  });

  describe('when arguments are passed through', function() {

    describe('when generation happens with a basic name passed as an argument', function() {
      before(function(done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './foo'))
          // always skip install in tests
          .withOptions({
            'skip-install': true
          })
          .withArguments('basic')
          .on('end', done);
      });

      it('should create the dynamically named files named correctly', function() {
        assert.file([
          'src/basic.js',
          'src/basic.html'
        ]);
      });
    });

    describe('when generation happens with a dashed name as an argument', function() {
      before(function(done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './foo'))
          // always skip install in tests
          .withOptions({
            'skip-install': true
          })
          .withArguments('dash-named')
          .on('end', done);
      });

      it('should create the dynamically named files named correctly', function() {
        assert.file([
          'src/dash-named.js',
          'src/dash-named.html'
        ]);
      });
    });

    describe('when generation happens with a cased name as an argument', function() {
      before(function(done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './foo'))
          // always skip install in tests
          .withOptions({
            'skip-install': true
          })
          .withArguments('casedName')
          .on('end', done);
      });

      it('should create the dynamically named files named correctly', function() {
        assert.file([
          'src/casedname.js',
          'src/casedname.html'
        ]);
      });
    });

  });

});
