import {Component, Template, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: '<%= _.slugify(appname) %>'
})

@Template({
  url: '<%= _.slugify(appname) %>.html'
})

class <%= _.classify(appname) %> {

  constructor() {
    console.log('component mounted');
  }

}

export function main() {
  bootstrap(<%= _.classify(appname) %>);
}