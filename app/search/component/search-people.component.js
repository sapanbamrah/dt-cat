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
    var SearchPeopleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (search_result_component_1_1) {
                search_result_component_1 = search_result_component_1_1;
            }],
        execute: function() {
            SearchPeopleComponent = (function () {
                function SearchPeopleComponent() {
                }
                SearchPeopleComponent = __decorate([
                    core_1.Component({
                        selector: '[search-people]',
                        templateUrl: 'templates/search/search-people.tpl.html',
                        directives: [search_result_component_1.SearchResultComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchPeopleComponent);
                return SearchPeopleComponent;
            }());
            exports_1("SearchPeopleComponent", SearchPeopleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9jb21wb25lbnQvc2VhcmNoLXBlb3BsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVBEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsV0FBVyxFQUFFLHlDQUF5Qzt3QkFDdEQsVUFBVSxFQUFDLENBQUMsK0NBQXFCLENBQUM7cUJBQ3JDLENBQUM7O3lDQUFBO2dCQUdGLDRCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx5REFFQyxDQUFBIiwiZmlsZSI6InNlYXJjaC9jb21wb25lbnQvc2VhcmNoLXBlb3BsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NlYXJjaFJlc3VsdENvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudCc7XG4gXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ1tzZWFyY2gtcGVvcGxlXScsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvc2VhcmNoL3NlYXJjaC1wZW9wbGUudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6W1NlYXJjaFJlc3VsdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUGVvcGxlQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
