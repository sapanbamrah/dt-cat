System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var ArraySortPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArraySortPipe = (function () {
                function ArraySortPipe() {
                }
                ArraySortPipe.prototype.transform = function (array, args) {
                    array.sort(function (a, b) {
                        if (a < b) {
                            return -1;
                        }
                        else if (a > b) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    });
                    console.log(args);
                    return array;
                };
                ArraySortPipe = __decorate([
                    core_1.Pipe({
                        name: "sort"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArraySortPipe);
                return ArraySortPipe;
            }());
            exports_1("ArraySortPipe", ArraySortPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9waXBlL3NvcnQtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQWFBLENBQUM7Z0JBWkMsaUNBQVMsR0FBVCxVQUFVLEtBQW9CLEVBQUUsSUFBWTtvQkFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFNO3dCQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDVixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1osQ0FBQzt3QkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2pCLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1gsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNYLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDZixDQUFDO2dCQWZIO29CQUFDLFdBQUksQ0FBQzt3QkFDSixJQUFJLEVBQUUsTUFBTTtxQkFDYixDQUFDOztpQ0FBQTtnQkFjRixvQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQseUNBYUMsQ0FBQSIsImZpbGUiOiJzZWFyY2gvcGlwZS9zb3J0LXBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlIH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQFBpcGUoe1xuICBuYW1lOiBcInNvcnRcIlxufSlcbmV4cG9ydCBjbGFzcyBBcnJheVNvcnRQaXBlIHtcbiAgdHJhbnNmb3JtKGFycmF5OiBBcnJheTxzdHJpbmc+LCBhcmdzOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBhcnJheS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgaWYgKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtjb25zb2xlLmxvZyhhcmdzKTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
