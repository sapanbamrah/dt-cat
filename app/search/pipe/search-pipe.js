System.register(['angular2/core'], function(exports_1, context_1) {
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
    var SearchPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchPipe = (function () {
                function SearchPipe() {
                }
                SearchPipe.prototype.transform = function (value, args) {
                    if (value.length === 0) {
                        return value;
                    }
                    var argTemperament = args[0][0];
                    var argGrooming = args[0][1];
                    var argEnergy = args[0][2];
                    var counter = args[0][3];
                    var resultArray = [];
                    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                        var item = value_1[_i];
                        var regTemperament = new RegExp(argTemperament);
                        var regGrooming = new RegExp(argGrooming);
                        var regEnergy = new RegExp(argEnergy);
                        if (item.temperament.match(argTemperament) && item.grooming.match(argGrooming) && item.energy.match(argEnergy)) {
                            resultArray.push(item);
                        }
                    }
                    //Angular 2 does not like the way when expression is changed, so setTimeout helps
                    setTimeout(function () { counter.count = resultArray.length; }, 20);
                    return resultArray;
                };
                SearchPipe = __decorate([
                    core_1.Pipe({
                        name: 'searchPipe'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchPipe);
                return SearchPipe;
            }());
            exports_1("SearchPipe", SearchPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9waXBlL3NlYXJjaC1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUE7Z0JBMkJBLENBQUM7Z0JBMUJHLDhCQUFTLEdBQVQsVUFBVSxLQUFrQixFQUFFLElBQWE7b0JBQ3ZDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztvQkFDRCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXpCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFFckIsR0FBRyxDQUFBLENBQWEsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssQ0FBQzt3QkFBbEIsSUFBSSxJQUFJLGNBQUE7d0JBQ1IsSUFBSSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQ2hELElBQUksV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFFdEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSxDQUFDOzRCQUMzRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMzQixDQUFDO3FCQUNKO29CQUVELGlGQUFpRjtvQkFDakYsVUFBVSxDQUFDLGNBQVcsT0FBTyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUVoRSxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUN2QixDQUFDO2dCQTdCTDtvQkFBQyxXQUFJLENBQUM7d0JBQ0YsSUFBSSxFQUFDLFlBQVk7cUJBQ3BCLENBQUM7OzhCQUFBO2dCQTRCRixpQkFBQztZQUFELENBM0JBLEFBMkJDLElBQUE7WUEzQkQsbUNBMkJDLENBQUEiLCJmaWxlIjoic2VhcmNoL3BpcGUvc2VhcmNoLXBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2VhcmNoSXRlbX0gZnJvbSAnLi4vaW50ZXJmYWNlL3NlYXJjaC1pdGVtJztcblxuQFBpcGUoe1xuICAgIG5hbWU6J3NlYXJjaFBpcGUnXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xuICAgIHRyYW5zZm9ybSh2YWx1ZTpTZWFyY2hJdGVtW10sIGFyZ3M6c3RyaW5nW10pOmFueXtcbiAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXJnVGVtcGVyYW1lbnQgPSBhcmdzWzBdWzBdO1xuICAgICAgICBsZXQgYXJnR3Jvb21pbmcgPSBhcmdzWzBdWzFdO1xuICAgICAgICBsZXQgYXJnRW5lcmd5ID0gYXJnc1swXVsyXTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSBhcmdzWzBdWzNdO1xuICAgICAgXG4gICAgICAgIGxldCByZXN1bHRBcnJheSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpdGVtIG9mIHZhbHVlKXtcbiAgICAgICAgICAgIGxldCByZWdUZW1wZXJhbWVudCA9IG5ldyBSZWdFeHAoYXJnVGVtcGVyYW1lbnQpO1xuICAgICAgICAgICAgbGV0IHJlZ0dyb29taW5nID0gbmV3IFJlZ0V4cChhcmdHcm9vbWluZyk7XG4gICAgICAgICAgICBsZXQgcmVnRW5lcmd5ID0gbmV3IFJlZ0V4cChhcmdFbmVyZ3kpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihpdGVtLnRlbXBlcmFtZW50Lm1hdGNoKGFyZ1RlbXBlcmFtZW50KSAmJiBpdGVtLmdyb29taW5nLm1hdGNoKGFyZ0dyb29taW5nKSAmJiBpdGVtLmVuZXJneS5tYXRjaChhcmdFbmVyZ3kpKXtcbiAgICAgICAgICAgICAgICByZXN1bHRBcnJheS5wdXNoKGl0ZW0pOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9Bbmd1bGFyIDIgZG9lcyBub3QgbGlrZSB0aGUgd2F5IHdoZW4gZXhwcmVzc2lvbiBpcyBjaGFuZ2VkLCBzbyBzZXRUaW1lb3V0IGhlbHBzXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjb3VudGVyLmNvdW50ID0gcmVzdWx0QXJyYXkubGVuZ3RoO30sIDIwKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXN1bHRBcnJheTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
