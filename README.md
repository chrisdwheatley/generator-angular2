# Generator Angular2

[![Build Status](https://secure.travis-ci.org/swirlycheetah/generator-angular2.png?branch=master)](https://travis-ci.org/swirlycheetah/generator-angular2) [![Join the chat at https://gitter.im/swirlycheetah/generator-angular2](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/swirlycheetah/generator-angular2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A [Yeoman](http://yeoman.io) Generator to aid in bootstrapping an Angular2 application.

Note: This generator is in a very early alpha state and is likely to change rapidly as Angular2 progresses. Currently it provides a quick and easy way to play around with Angular2 and not much more. A lot of the setup has been borrowed from [ng2do](https://github.com/davideast/ng2do) by [David East](https://twitter.com/_davideast).

### Getting Started

Install both [Yeoman](http://yeoman.io) and this generator globally.

```bash
npm install -g yo generator-angular2
```

In your desired project folder run the generator.

```bash
yo angular2
```

You'll be prompted to start the server once the generator has finished.

```bash
gulp serve
```

You'll then be able to access the application at `http://localhost:8000`. Serving the application can be configured in the `gulpfile.js` using [gulp-webserver](https://www.npmjs.com/package/gulp-webserver) options.

### Developing

All contibutions are more than welcome, no matter how large or small.

### License

Released under the MIT license: [opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
