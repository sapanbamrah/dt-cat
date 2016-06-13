import {Component, Input} from 'angular2/core';
import {CapitalizePipe} from "../pipe/capitalize-pipe";


@Component({
    selector: 'search-item',
    templateUrl: 'templates/search/search-item.tpl.html',
    pipes: [CapitalizePipe]
})
export class SearchItemComponent {
    @Input() searchItem;
}
