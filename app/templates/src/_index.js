import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2';
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
