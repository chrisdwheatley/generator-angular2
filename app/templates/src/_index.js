import {Component, Template, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: 'generator-angular2'
})

@Template({
  url: 'generator-angular2.html'
})

class GeneratorAngular2 {

  constructor() {
    console.log('component mounted');
  }

}

export function main() {
  bootstrap(GeneratorAngular2);
}