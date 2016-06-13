System.register(['angular2/core', "../pipe/capitalize-pipe"], function(exports_1, context_1) {
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
    var core_1, capitalize_pipe_1;
    var SearchItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (capitalize_pipe_1_1) {
                capitalize_pipe_1 = capitalize_pipe_1_1;
            }],
        execute: function() {
            SearchItemComponent = (function () {
                function SearchItemComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SearchItemComponent.prototype, "searchItem", void 0);
                SearchItemComponent = __decorate([
                    core_1.Component({
                        selector: 'search-item',
                        templateUrl: 'templates/search/search-item.tpl.html',
                        pipes: [capitalize_pipe_1.CapitalizePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchItemComponent);
                return SearchItemComponent;
            }());
            exports_1("SearchItemComponent", SearchItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9jb21wb25lbnQvc2VhcmNoLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFERztvQkFBQyxZQUFLLEVBQUU7O3VFQUFBO2dCQU5aO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBRSx1Q0FBdUM7d0JBQ3BELEtBQUssRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzFCLENBQUM7O3VDQUFBO2dCQUdGLDBCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxxREFFQyxDQUFBIiwiZmlsZSI6InNlYXJjaC9jb21wb25lbnQvc2VhcmNoLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q2FwaXRhbGl6ZVBpcGV9IGZyb20gXCIuLi9waXBlL2NhcGl0YWxpemUtcGlwZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VhcmNoLWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3NlYXJjaC9zZWFyY2gtaXRlbS50cGwuaHRtbCcsXG4gICAgcGlwZXM6IFtDYXBpdGFsaXplUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoSXRlbUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgc2VhcmNoSXRlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
