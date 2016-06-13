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
    var OrderByPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OrderByPipe = (function () {
                function OrderByPipe() {
                }
                OrderByPipe.prototype.transform = function (array, args) {
                    // Check if array exists, in this case array contains articles and args is an array that has 1 element : !id
                    if (array) {
                        // get the first element
                        var orderByValue_1 = args[0];
                        var byVal_1 = 1;
                        // check if exclamation point 
                        if (orderByValue_1.charAt(0) == "!") {
                            // reverse the array
                            byVal_1 = -1;
                            orderByValue_1 = orderByValue_1.substring(1);
                        }
                        console.log("byVal", byVal_1);
                        console.log("orderByValue", orderByValue_1);
                        array.sort(function (a, b) {
                            if (a[orderByValue_1] < b[orderByValue_1]) {
                                return -1 * byVal_1;
                            }
                            else if (a[orderByValue_1] > b[orderByValue_1]) {
                                return 1 * byVal_1;
                            }
                            else {
                                return 0;
                            }
                        });
                        return array;
                    }
                    //
                };
                OrderByPipe = __decorate([
                    core_1.Pipe({
                        //The @Pipe decorator takes an object with a name property whose value is the pipe name that we'll use within a template expression. It must be a valid JavaScript identifier. Our pipe's name is orderby.
                        name: "orderby"
                    }), 
                    __metadata('design:paramtypes', [])
                ], OrderByPipe);
                return OrderByPipe;
            }());
            exports_1("OrderByPipe", OrderByPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9waXBlL29yZGVyYnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQTtnQkFxQ0EsQ0FBQztnQkFwQ0MsK0JBQVMsR0FBVCxVQUFVLEtBQWdCLEVBQUUsSUFBSztvQkFFL0IsNEdBQTRHO29CQUU1RyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUVULHdCQUF3Qjt3QkFFeEIsSUFBSSxjQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUMxQixJQUFJLE9BQUssR0FBRyxDQUFDLENBQUE7d0JBRWIsOEJBQThCO3dCQUU5QixFQUFFLENBQUEsQ0FBQyxjQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBRWpDLG9CQUFvQjs0QkFFcEIsT0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFBOzRCQUNWLGNBQVksR0FBRyxjQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUMxQyxDQUFDO3dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLE9BQUssQ0FBQyxDQUFDO3dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxjQUFZLENBQUMsQ0FBQzt3QkFFekMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFNOzRCQUN4QixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsY0FBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDckMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLE9BQUssQ0FBQzs0QkFDbEIsQ0FBQzs0QkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQzdDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsT0FBSyxDQUFDOzRCQUNqQixDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNOLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ1gsQ0FBQzt3QkFDSCxDQUFDLENBQUMsQ0FBQzt3QkFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNmLENBQUM7b0JBQ0QsRUFBRTtnQkFDSixDQUFDO2dCQTNDSDtvQkFBQyxXQUFJLENBQUM7d0JBRUosME1BQTBNO3dCQUUxTSxJQUFJLEVBQUUsU0FBUztxQkFDaEIsQ0FBQzs7K0JBQUE7Z0JBdUNGLGtCQUFDO1lBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtZQXJDRCxxQ0FxQ0MsQ0FBQSIsImZpbGUiOiJzZWFyY2gvcGlwZS9vcmRlcmJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9XZSB0ZWxsIEFuZ3VsYXIgdGhhdCB0aGlzIGlzIGEgcGlwZSBieSBhcHBseWluZyB0aGUgQFBpcGUgZGVjb3JhdG9yIHdoaWNoIHdlIGltcG9ydCBmcm9tIHRoZSBjb3JlIEFuZ3VsYXIgbGlicmFyeS5cbmltcG9ydCB7UGlwZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BpcGVUcmFuc2Zvcm19IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AUGlwZSh7XG5cbiAgLy9UaGUgQFBpcGUgZGVjb3JhdG9yIHRha2VzIGFuIG9iamVjdCB3aXRoIGEgbmFtZSBwcm9wZXJ0eSB3aG9zZSB2YWx1ZSBpcyB0aGUgcGlwZSBuYW1lIHRoYXQgd2UnbGwgdXNlIHdpdGhpbiBhIHRlbXBsYXRlIGV4cHJlc3Npb24uIEl0IG11c3QgYmUgYSB2YWxpZCBKYXZhU2NyaXB0IGlkZW50aWZpZXIuIE91ciBwaXBlJ3MgbmFtZSBpcyBvcmRlcmJ5LlxuXG4gIG5hbWU6IFwib3JkZXJieVwiXG59KVxuXG5leHBvcnQgY2xhc3MgT3JkZXJCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGFycmF5OkFycmF5PGFueT4sIGFyZ3M/KSB7XG5cbiAgICAvLyBDaGVjayBpZiBhcnJheSBleGlzdHMsIGluIHRoaXMgY2FzZSBhcnJheSBjb250YWlucyBhcnRpY2xlcyBhbmQgYXJncyBpcyBhbiBhcnJheSB0aGF0IGhhcyAxIGVsZW1lbnQgOiAhaWRcblxuICAgIGlmKGFycmF5KSB7XG5cbiAgICAgIC8vIGdldCB0aGUgZmlyc3QgZWxlbWVudFxuXG4gICAgICBsZXQgb3JkZXJCeVZhbHVlID0gYXJnc1swXVxuICAgICAgbGV0IGJ5VmFsID0gMVxuXG4gICAgICAvLyBjaGVjayBpZiBleGNsYW1hdGlvbiBwb2ludCBcblxuICAgICAgaWYob3JkZXJCeVZhbHVlLmNoYXJBdCgwKSA9PSBcIiFcIikge1xuXG4gICAgICAgIC8vIHJldmVyc2UgdGhlIGFycmF5XG5cbiAgICAgICAgYnlWYWwgPSAtMVxuICAgICAgICBvcmRlckJ5VmFsdWUgPSBvcmRlckJ5VmFsdWUuc3Vic3RyaW5nKDEpXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcImJ5VmFsXCIsYnlWYWwpO1xuICAgICAgY29uc29sZS5sb2coXCJvcmRlckJ5VmFsdWVcIixvcmRlckJ5VmFsdWUpO1xuXG4gICAgICBhcnJheS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICBpZihhW29yZGVyQnlWYWx1ZV0gPCBiW29yZGVyQnlWYWx1ZV0pIHtcbiAgICAgICAgICByZXR1cm4gLTEqYnlWYWw7XG4gICAgICAgIH0gZWxzZSBpZiAoYVtvcmRlckJ5VmFsdWVdID4gYltvcmRlckJ5VmFsdWVdKSB7XG4gICAgICAgICAgcmV0dXJuIDEqYnlWYWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICAvL1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
