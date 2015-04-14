import {Component, View, bootstrap} from 'angular2/angular2';
import {<%= _.classify(appname) %>} from '<%= _.slugify(appname) %>';

@Component({
  selector: 'main'
})

@View({
  directives: [<%= _.classify(appname) %>],
  template: `
    <<%= _.slugify(appname) %>></<%= _.slugify(appname) %>>
  `
})

class Main {

}

bootstrap(Main);
