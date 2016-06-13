System.register(['angular2/core', './search-result.component'], function(exports_1, context_1) {
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
    var core_1, search_result_component_1;
    var SearchCatsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (search_result_component_1_1) {
                search_result_component_1 = search_result_component_1_1;
            }],
        execute: function() {
            SearchCatsComponent = (function () {
                function SearchCatsComponent() {
                }
                SearchCatsComponent = __decorate([
                    core_1.Component({
                        selector: '[search-cats]',
                        templateUrl: 'templates/search/search-cats.tpl.html',
                        directives: [search_result_component_1.SearchResultComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchCatsComponent);
                return SearchCatsComponent;
            }());
            exports_1("SearchCatsComponent", SearchCatsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9jb21wb25lbnQvc2VhcmNoLWNhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFQRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixXQUFXLEVBQUUsdUNBQXVDO3dCQUNwRCxVQUFVLEVBQUMsQ0FBQywrQ0FBcUIsQ0FBQztxQkFDckMsQ0FBQzs7dUNBQUE7Z0JBR0YsMEJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHFEQUVDLENBQUEiLCJmaWxlIjoic2VhcmNoL2NvbXBvbmVudC9zZWFyY2gtY2F0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NlYXJjaFJlc3VsdENvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudCc7XG4gXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ1tzZWFyY2gtY2F0c10nLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3NlYXJjaC9zZWFyY2gtY2F0cy50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczpbU2VhcmNoUmVzdWx0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDYXRzQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
