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
    var CatsListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CatsListService = (function () {
                function CatsListService() {
                }
                CatsListService.prototype.fetchList = function () {
                    var data = {
                        "cats": [
                            {
                                "name": "abyssinian",
                                "image": "abyssinian.jpg",
                                "temperament": "active",
                                "grooming": "easy",
                                "energy": "high"
                            },
                            {
                                "name": "american bobtail",
                                "image": "american-bobtail.jpg",
                                "temperament": "affable",
                                "grooming": "easy",
                                "energy": "average"
                            },
                            {
                                "name": "australian mist",
                                "image": "australian-mist.jpg",
                                "temperament": "pleasant",
                                "grooming": "easy",
                                "energy": "high"
                            },
                            {
                                "name": "birman",
                                "image": "birman.jpg",
                                "temperament": "reserved",
                                "grooming": "average",
                                "energy": "average"
                            },
                            {
                                "name": "egyptian mau",
                                "image": "egytian-mau.jpg",
                                "temperament": "intelligent",
                                "grooming": "easy",
                                "energy": "high"
                            },
                            {
                                "name": "himalayan",
                                "image": "himalayan.jpg",
                                "temperament": "docile",
                                "grooming": "difficult",
                                "energy": "average"
                            },
                            {
                                "name": "javanese",
                                "image": "javanese.jpg",
                                "temperament": "vocal",
                                "grooming": "easy",
                                "energy": "high"
                            },
                            {
                                "name": "manx",
                                "image": "manx.jpg",
                                "temperament": "even-tempered",
                                "grooming": "average",
                                "energy": "average"
                            },
                            {
                                "name": "napoleon",
                                "image": "napoleon.jpg",
                                "temperament": "charming",
                                "grooming": "high",
                                "energy": "average"
                            },
                            {
                                "name": "persian",
                                "image": "persian.jpg",
                                "temperament": "passive",
                                "grooming": "high",
                                "energy": "average"
                            },
                            {
                                "name": "peterbald",
                                "image": "peterbald.jpg",
                                "temperament": "demanding",
                                "grooming": "average",
                                "energy": "average"
                            },
                            {
                                "name": "ragdoll",
                                "image": "ragdoll.jpg",
                                "temperament": "placid",
                                "grooming": "easy",
                                "energy": "low"
                            },
                            {
                                "name": "ragamuffin",
                                "image": "ragamuffin.jpg",
                                "temperament": "laid-back",
                                "grooming": "average",
                                "energy": "average"
                            },
                            {
                                "name": "scottish fold",
                                "image": "scottish-fold.jpg",
                                "temperament": "easy nature",
                                "grooming": "average",
                                "energy": "average"
                            },
                            {
                                "name": "siamese",
                                "image": "siamese.jpg",
                                "temperament": "active",
                                "grooming": "easy",
                                "energy": "high"
                            },
                            {
                                "name": "singapura",
                                "image": "singapura.jpg",
                                "temperament": "affectionate",
                                "grooming": "easy",
                                "energy": "high"
                            }
                        ]
                    };
                    return data["cats"];
                };
                CatsListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CatsListService);
                return CatsListService;
            }());
            exports_1("CatsListService", CatsListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9zZXJ2aWNlL2NhdHMtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUE7Z0JBMEhBLENBQUM7Z0JBekhHLG1DQUFTLEdBQVQ7b0JBRUosSUFBSSxJQUFJLEdBQUU7d0JBQ1AsTUFBTSxFQUFDOzRCQUNKO2dDQUNHLE1BQU0sRUFBQyxZQUFZO2dDQUNuQixPQUFPLEVBQUMsZ0JBQWdCO2dDQUN4QixhQUFhLEVBQUMsUUFBUTtnQ0FDdEIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxNQUFNOzZCQUNqQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsa0JBQWtCO2dDQUN6QixPQUFPLEVBQUMsc0JBQXNCO2dDQUM5QixhQUFhLEVBQUMsU0FBUztnQ0FDdkIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxTQUFTOzZCQUNwQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsaUJBQWlCO2dDQUN4QixPQUFPLEVBQUMscUJBQXFCO2dDQUM3QixhQUFhLEVBQUMsVUFBVTtnQ0FDeEIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxNQUFNOzZCQUNqQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsUUFBUTtnQ0FDZixPQUFPLEVBQUMsWUFBWTtnQ0FDcEIsYUFBYSxFQUFDLFVBQVU7Z0NBQ3hCLFVBQVUsRUFBQyxTQUFTO2dDQUNwQixRQUFRLEVBQUMsU0FBUzs2QkFDcEI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLGNBQWM7Z0NBQ3JCLE9BQU8sRUFBQyxpQkFBaUI7Z0NBQ3pCLGFBQWEsRUFBQyxhQUFhO2dDQUMzQixVQUFVLEVBQUMsTUFBTTtnQ0FDakIsUUFBUSxFQUFDLE1BQU07NkJBQ2pCOzRCQUNEO2dDQUNHLE1BQU0sRUFBQyxXQUFXO2dDQUNsQixPQUFPLEVBQUMsZUFBZTtnQ0FDdkIsYUFBYSxFQUFDLFFBQVE7Z0NBQ3RCLFVBQVUsRUFBQyxXQUFXO2dDQUN0QixRQUFRLEVBQUMsU0FBUzs2QkFDcEI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLFVBQVU7Z0NBQ2pCLE9BQU8sRUFBQyxjQUFjO2dDQUN0QixhQUFhLEVBQUMsT0FBTztnQ0FDckIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxNQUFNOzZCQUNqQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsTUFBTTtnQ0FDYixPQUFPLEVBQUMsVUFBVTtnQ0FDbEIsYUFBYSxFQUFDLGVBQWU7Z0NBQzdCLFVBQVUsRUFBQyxTQUFTO2dDQUNwQixRQUFRLEVBQUMsU0FBUzs2QkFDcEI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLFVBQVU7Z0NBQ2pCLE9BQU8sRUFBQyxjQUFjO2dDQUN0QixhQUFhLEVBQUMsVUFBVTtnQ0FDeEIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxTQUFTOzZCQUNwQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsU0FBUztnQ0FDaEIsT0FBTyxFQUFDLGFBQWE7Z0NBQ3JCLGFBQWEsRUFBQyxTQUFTO2dDQUN2QixVQUFVLEVBQUMsTUFBTTtnQ0FDakIsUUFBUSxFQUFDLFNBQVM7NkJBQ3BCOzRCQUNEO2dDQUNHLE1BQU0sRUFBQyxXQUFXO2dDQUNsQixPQUFPLEVBQUMsZUFBZTtnQ0FDdkIsYUFBYSxFQUFDLFdBQVc7Z0NBQ3pCLFVBQVUsRUFBQyxTQUFTO2dDQUNwQixRQUFRLEVBQUMsU0FBUzs2QkFDcEI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLFNBQVM7Z0NBQ2hCLE9BQU8sRUFBQyxhQUFhO2dDQUNyQixhQUFhLEVBQUMsUUFBUTtnQ0FDdEIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxLQUFLOzZCQUNoQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsWUFBWTtnQ0FDbkIsT0FBTyxFQUFDLGdCQUFnQjtnQ0FDeEIsYUFBYSxFQUFDLFdBQVc7Z0NBQ3pCLFVBQVUsRUFBQyxTQUFTO2dDQUNwQixRQUFRLEVBQUMsU0FBUzs2QkFDcEI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLGVBQWU7Z0NBQ3RCLE9BQU8sRUFBQyxtQkFBbUI7Z0NBQzNCLGFBQWEsRUFBQyxhQUFhO2dDQUMzQixVQUFVLEVBQUMsU0FBUztnQ0FDcEIsUUFBUSxFQUFDLFNBQVM7NkJBQ3BCOzRCQUNEO2dDQUNHLE1BQU0sRUFBQyxTQUFTO2dDQUNoQixPQUFPLEVBQUMsYUFBYTtnQ0FDckIsYUFBYSxFQUFDLFFBQVE7Z0NBQ3RCLFVBQVUsRUFBQyxNQUFNO2dDQUNqQixRQUFRLEVBQUMsTUFBTTs2QkFDakI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLFdBQVc7Z0NBQ2xCLE9BQU8sRUFBQyxlQUFlO2dDQUN2QixhQUFhLEVBQUMsY0FBYztnQ0FDNUIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxNQUFNOzZCQUNqQjt5QkFDSDtxQkFDSCxDQUFDO29CQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBMUhMO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQTJIYixzQkFBQztZQUFELENBMUhBLEFBMEhDLElBQUE7WUExSEQsNkNBMEhDLENBQUEiLCJmaWxlIjoic2VhcmNoL3NlcnZpY2UvY2F0cy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2F0c0xpc3RTZXJ2aWNle1xuICAgIGZldGNoTGlzdCgpe1xuXG5sZXQgZGF0YSA9eyAgXG4gICBcImNhdHNcIjpbICBcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJhYnlzc2luaWFuXCIsXG4gICAgICAgICBcImltYWdlXCI6XCJhYnlzc2luaWFuLmpwZ1wiLFxuICAgICAgICAgXCJ0ZW1wZXJhbWVudFwiOlwiYWN0aXZlXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJlYXN5XCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiaGlnaFwiXG4gICAgICB9LFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcImFtZXJpY2FuIGJvYnRhaWxcIixcbiAgICAgICAgIFwiaW1hZ2VcIjpcImFtZXJpY2FuLWJvYnRhaWwuanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJhZmZhYmxlXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJlYXN5XCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiYXZlcmFnZVwiXG4gICAgICB9LFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcImF1c3RyYWxpYW4gbWlzdFwiLFxuICAgICAgICAgXCJpbWFnZVwiOlwiYXVzdHJhbGlhbi1taXN0LmpwZ1wiLFxuICAgICAgICAgXCJ0ZW1wZXJhbWVudFwiOlwicGxlYXNhbnRcIixcbiAgICAgICAgIFwiZ3Jvb21pbmdcIjpcImVhc3lcIixcbiAgICAgICAgIFwiZW5lcmd5XCI6XCJoaWdoXCJcbiAgICAgIH0sXG4gICAgICB7ICBcbiAgICAgICAgIFwibmFtZVwiOlwiYmlybWFuXCIsXG4gICAgICAgICBcImltYWdlXCI6XCJiaXJtYW4uanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJyZXNlcnZlZFwiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiYXZlcmFnZVwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImF2ZXJhZ2VcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJlZ3lwdGlhbiBtYXVcIixcbiAgICAgICAgIFwiaW1hZ2VcIjpcImVneXRpYW4tbWF1LmpwZ1wiLFxuICAgICAgICAgXCJ0ZW1wZXJhbWVudFwiOlwiaW50ZWxsaWdlbnRcIixcbiAgICAgICAgIFwiZ3Jvb21pbmdcIjpcImVhc3lcIixcbiAgICAgICAgIFwiZW5lcmd5XCI6XCJoaWdoXCJcbiAgICAgIH0sXG4gICAgICB7ICBcbiAgICAgICAgIFwibmFtZVwiOlwiaGltYWxheWFuXCIsXG4gICAgICAgICBcImltYWdlXCI6XCJoaW1hbGF5YW4uanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJkb2NpbGVcIixcbiAgICAgICAgIFwiZ3Jvb21pbmdcIjpcImRpZmZpY3VsdFwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImF2ZXJhZ2VcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJqYXZhbmVzZVwiLFxuICAgICAgICAgXCJpbWFnZVwiOlwiamF2YW5lc2UuanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJ2b2NhbFwiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiZWFzeVwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImhpZ2hcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJtYW54XCIsXG4gICAgICAgICBcImltYWdlXCI6XCJtYW54LmpwZ1wiLFxuICAgICAgICAgXCJ0ZW1wZXJhbWVudFwiOlwiZXZlbi10ZW1wZXJlZFwiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiYXZlcmFnZVwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImF2ZXJhZ2VcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJuYXBvbGVvblwiLFxuICAgICAgICAgXCJpbWFnZVwiOlwibmFwb2xlb24uanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJjaGFybWluZ1wiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiaGlnaFwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImF2ZXJhZ2VcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJwZXJzaWFuXCIsXG4gICAgICAgICBcImltYWdlXCI6XCJwZXJzaWFuLmpwZ1wiLFxuICAgICAgICAgXCJ0ZW1wZXJhbWVudFwiOlwicGFzc2l2ZVwiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiaGlnaFwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImF2ZXJhZ2VcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJwZXRlcmJhbGRcIixcbiAgICAgICAgIFwiaW1hZ2VcIjpcInBldGVyYmFsZC5qcGdcIixcbiAgICAgICAgIFwidGVtcGVyYW1lbnRcIjpcImRlbWFuZGluZ1wiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiYXZlcmFnZVwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImF2ZXJhZ2VcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJyYWdkb2xsXCIsXG4gICAgICAgICBcImltYWdlXCI6XCJyYWdkb2xsLmpwZ1wiLFxuICAgICAgICAgXCJ0ZW1wZXJhbWVudFwiOlwicGxhY2lkXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJlYXN5XCIsXG4gICAgICAgICBcImVuZXJneVwiOlwibG93XCJcbiAgICAgIH0sXG4gICAgICB7ICBcbiAgICAgICAgIFwibmFtZVwiOlwicmFnYW11ZmZpblwiLFxuICAgICAgICAgXCJpbWFnZVwiOlwicmFnYW11ZmZpbi5qcGdcIixcbiAgICAgICAgIFwidGVtcGVyYW1lbnRcIjpcImxhaWQtYmFja1wiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiYXZlcmFnZVwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImF2ZXJhZ2VcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJzY290dGlzaCBmb2xkXCIsXG4gICAgICAgICBcImltYWdlXCI6XCJzY290dGlzaC1mb2xkLmpwZ1wiLFxuICAgICAgICAgXCJ0ZW1wZXJhbWVudFwiOlwiZWFzeSBuYXR1cmVcIixcbiAgICAgICAgIFwiZ3Jvb21pbmdcIjpcImF2ZXJhZ2VcIixcbiAgICAgICAgIFwiZW5lcmd5XCI6XCJhdmVyYWdlXCJcbiAgICAgIH0sXG4gICAgICB7ICBcbiAgICAgICAgIFwibmFtZVwiOlwic2lhbWVzZVwiLFxuICAgICAgICAgXCJpbWFnZVwiOlwic2lhbWVzZS5qcGdcIixcbiAgICAgICAgIFwidGVtcGVyYW1lbnRcIjpcImFjdGl2ZVwiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiZWFzeVwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImhpZ2hcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJzaW5nYXB1cmFcIixcbiAgICAgICAgIFwiaW1hZ2VcIjpcInNpbmdhcHVyYS5qcGdcIixcbiAgICAgICAgIFwidGVtcGVyYW1lbnRcIjpcImFmZmVjdGlvbmF0ZVwiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiZWFzeVwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImhpZ2hcIlxuICAgICAgfVxuICAgXVxufTtcblxuICAgICAgICByZXR1cm4gZGF0YVtcImNhdHNcIl07XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
