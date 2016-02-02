import {Component, View} from 'angular2/core';

@Component({
  selector: '<%= appname %>'
})

@View({
  templateUrl: '<%= appname %>.html'
})

export class <%= classname %> {

  constructor() {
    console.info('<%= classname %> Component Mounted Successfully');
  }

}
