import {Component, View, bootstrap} from 'angular2/angular2';
import {<%= className %>} from '<%= appName %>';

@Component({
  selector: 'main'
})

@View({
  directives: [<%= className %>],
  template: `
    <<%= appName %>></<%= appName %>>
  `
})

class Main {

}

bootstrap(Main);
