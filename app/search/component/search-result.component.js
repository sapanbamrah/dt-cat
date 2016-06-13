System.register(['angular2/core', './search-item.component', '../service/cats-list.service', '../pipe/search-pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, search_item_component_1, cats_list_service_1, search_pipe_1;
    var SearchResultComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (search_item_component_1_1) {
                search_item_component_1 = search_item_component_1_1;
            },
            function (cats_list_service_1_1) {
                cats_list_service_1 = cats_list_service_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            SearchResultComponent = (function () {
                function SearchResultComponent(_catsListService) {
                    this._catsListService = _catsListService;
                }
                SearchResultComponent.prototype.ngOnInit = function () {
                    this.searchItems = this._catsListService.fetchList();
                    this.itemsCount = this.searchItems.length;
                    this.filteredCount = { count: this.searchItems.length };
                };
                SearchResultComponent = __decorate([
                    core_1.Component({
                        selector: '[search-result]',
                        templateUrl: 'templates/search/search-result.tpl.html',
                        directives: [search_item_component_1.SearchItemComponent],
                        providers: [cats_list_service_1.CatsListService],
                        pipes: [search_pipe_1.SearchPipe]
                    }), 
                    __metadata('design:paramtypes', [cats_list_service_1.CatsListService])
                ], SearchResultComponent);
                return SearchResultComponent;
            }());
            exports_1("SearchResultComponent", SearchResultComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9jb21wb25lbnQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFLSSwrQkFBb0IsZ0JBQWlDO29CQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO2dCQUFFLENBQUM7Z0JBRXhELHdDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7b0JBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUMsQ0FBQztnQkFFMUQsQ0FBQztnQkFuQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixXQUFXLEVBQUUseUNBQXlDO3dCQUN0RCxVQUFVLEVBQUMsQ0FBQywyQ0FBbUIsQ0FBQzt3QkFDaEMsU0FBUyxFQUFDLENBQUMsbUNBQWUsQ0FBQzt3QkFDM0IsS0FBSyxFQUFDLENBQUMsd0JBQVUsQ0FBQztxQkFDckIsQ0FBQzs7eUNBQUE7Z0JBZUYsNEJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELHlEQWNDLENBQUEiLCJmaWxlIjoic2VhcmNoL2NvbXBvbmVudC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2VhcmNoSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtDYXRzTGlzdFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvY2F0cy1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHtTZWFyY2hQaXBlfSBmcm9tICcuLi9waXBlL3NlYXJjaC1waXBlJztcbiBcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW3NlYXJjaC1yZXN1bHRdJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdC50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczpbU2VhcmNoSXRlbUNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOltDYXRzTGlzdFNlcnZpY2VdLFxuICAgIHBpcGVzOltTZWFyY2hQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgaXRlbXNDb3VudDpudW1iZXI7XG4gICAgc2VhcmNoSXRlbXM6IEFycmF5PFNlYXJjaEl0ZW0+O1xuICAgIGZpbHRlcmVkQ291bnQ6e2NvdW50OiAwfTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jYXRzTGlzdFNlcnZpY2U6IENhdHNMaXN0U2VydmljZSl7fVxuICAgIFxuICAgIG5nT25Jbml0KCk6YW55e1xuICAgICAgICB0aGlzLnNlYXJjaEl0ZW1zID0gdGhpcy5fY2F0c0xpc3RTZXJ2aWNlLmZldGNoTGlzdCgpO1xuICAgICAgICB0aGlzLml0ZW1zQ291bnQgPSB0aGlzLnNlYXJjaEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgdGhpcy5maWx0ZXJlZENvdW50ID0ge2NvdW50OiB0aGlzLnNlYXJjaEl0ZW1zLmxlbmd0aH07XG4gICAgICAgIFxuICAgIH1cbiAgXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
