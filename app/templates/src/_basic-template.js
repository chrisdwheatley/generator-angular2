import {Component, View} from 'angular2/angular2';

@Component({
  selector: '<%= appName %>'
})

@View({
  templateUrl: '<%= appName %>.html'
})

export class <%= className %> {

  constructor() {
    console.info('<%= className %> Component Mounted Successfully');
  }

}
