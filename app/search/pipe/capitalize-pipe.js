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
    var CapitalizePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CapitalizePipe = (function () {
                function CapitalizePipe() {
                }
                CapitalizePipe.prototype.transform = function (value) {
                    if (value) {
                        return value.charAt(0).toUpperCase() + value.slice(1);
                    }
                    return value;
                };
                CapitalizePipe = __decorate([
                    core_1.Pipe({
                        name: 'capitalize'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CapitalizePipe);
                return CapitalizePipe;
            }());
            exports_1("CapitalizePipe", CapitalizePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9waXBlL2NhcGl0YWxpemUtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO2dCQVNBLENBQUM7Z0JBUEcsa0NBQVMsR0FBVCxVQUFVLEtBQVM7b0JBQ2YsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDUixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxRCxDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBVkw7b0JBQUMsV0FBSSxDQUFDO3dCQUNGLElBQUksRUFBRSxZQUFZO3FCQUNyQixDQUFDOztrQ0FBQTtnQkFVRixxQkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsMkNBU0MsQ0FBQSIsImZpbGUiOiJzZWFyY2gvcGlwZS9jYXBpdGFsaXplLXBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1BpcGVUcmFuc2Zvcm19IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnY2FwaXRhbGl6ZSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHRyYW5zZm9ybSh2YWx1ZTphbnkpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
