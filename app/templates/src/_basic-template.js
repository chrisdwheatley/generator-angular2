import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

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
