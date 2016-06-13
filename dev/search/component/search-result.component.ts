import {Component} from 'angular2/core';
import {SearchItemComponent} from './search-item.component';
import {CatsListService} from '../service/cats-list.service';
import {SearchPipe} from '../pipe/search-pipe';
 
@Component({
    selector: '[search-result]',
    templateUrl: 'templates/search/search-result.tpl.html',
    directives:[SearchItemComponent],
    providers:[CatsListService],
    pipes:[SearchPipe]
})
export class SearchResultComponent implements OnInit{
    itemsCount:number;
    searchItems: Array<SearchItem>;
    filteredCount:{count: 0};
    
    constructor(private _catsListService: CatsListService){}
    
    ngOnInit():any{
        this.searchItems = this._catsListService.fetchList();
        this.itemsCount = this.searchItems.length;
        this.filteredCount = {count: this.searchItems.length};
        
    }
  
}
