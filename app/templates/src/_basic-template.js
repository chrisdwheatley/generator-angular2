import {Component, View} from 'angular2/angular2';

@Component({
  selector: '<%= _.slugify(appname) %>'
})

@View({
  templateUrl: '<%= _.slugify(appname) %>.html'
})

export class <%= _.classify(appname) %> {

  constructor() {
    console.info('<%= _.classify(appname) %> Component Mounted Successfully');
  }

}
