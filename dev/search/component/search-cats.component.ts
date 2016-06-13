import {Component} from 'angular2/core';
import {SearchResultComponent} from './search-result.component';
 
@Component({
    selector: '[search-cats]',
    templateUrl: 'templates/search/search-cats.tpl.html',
    directives:[SearchResultComponent]
})
export class SearchCatsComponent {

}
