import {Component, Template, bootstrap} from 'angular2/angular2';
import {<%= _.classify(appname) %>} from '<%= _.slugify(appname) %>';

@Component({
  selector: 'main'
})

@Template({
  directives: [<%= _.classify(appname) %>],
  inline: `
    <<%= _.slugify(appname) %>></<%= _.slugify(appname) %>>
  `
})

class Main {

}

bootstrap(Main);
