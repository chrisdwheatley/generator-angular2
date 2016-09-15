# Generator Angular2

[![Build Status](https://secure.travis-ci.org/swirlycheetah/generator-angular2.png?branch=master)](https://travis-ci.org/swirlycheetah/generator-angular2)  [![Join the chat at https://gitter.im/swirlycheetah/generator-angular2](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/swirlycheetah/generator-angular2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A [Yeoman](http://yeoman.io) Generator to aid in bootstrapping an Angular2 application using the very latest Angular2 Beta release.

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

You'll then be able to access the application at `http://localhost:8000`. Serving the application can be configured in the `gulpfile.js` using [gulp-webserver](https://www.npmjs.com/package/gulp-webserver) options.

To run this server, execute this command in your terminal:

```bash
gulp dev
```

### Generated Structure

The structure generated is;

```
- src
	- index.js
	- index.html
	- {generated-file-name}.js
	- {generated-file-name}.html
- .editorconfig
- .gitignore
- gulpfile.js
- package.json
- readme.md
```

### Developing

All contributions are more than welcome, no matter how large or small.

Clone the repository and `cd` into it

`git clone git@github.com:swirlycheetah/generator-angular2.git && cd generator-angular2`

Install the project dependencies

`npm install`

Link the package to use the version you're working on

`npm link`

Run the tests to ensure no failures

`npm test`

Submit a pull request with your changes

### License

Released under the MIT license: [opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
