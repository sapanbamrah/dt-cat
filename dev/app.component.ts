import {Component} from 'angular2/core';
import {SearchCatsComponent} from './search/component/search-cats.component';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.tpl.html',
    directives:[SearchCatsComponent]
})
export class AppComponent {

}
