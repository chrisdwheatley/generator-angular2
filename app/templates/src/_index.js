import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {<%= classname %>} from '<%= appname %>';

@Component({
  selector: 'main'
})

@View({
  directives: [<%= classname %>],
  template: `
    <<%= appname %>></<%= appname %>>
  `
})

class Main {

}

bootstrap(Main);
