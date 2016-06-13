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
    var PeopleListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PeopleListService = (function () {
                function PeopleListService() {
                }
                PeopleListService.prototype.fetchList = function () {
                    /*let data2 = [
                    {
                        'id': '1',
                        'firstName': 'Sean',
                        'lastName': 'Kerr',
                        'picture': 'img/sean.png',
                        'Title': 'Senior Developer'
                    },
                    {
                        'id': '2',
                        'firstName': 'Yaw',
                        'lastName': 'Ly',
                        'picture': 'img/yaw.png',
                        'Title': 'AEM Magician'
                    },
                    {
                        'id': '3',
                        'firstName': 'Lucy',
                        'lastName': 'Hehir',
                        'picture': 'img/lucy.png',
                        'Title': 'Scrum master'
                    },
                    {
                        'id': '4',
                        'firstName': 'Rory',
                        'lastName': 'Elrick',
                        'picture': 'img/rory.png',
                        'Title': 'AEM Guru'
                    },
                    {
                        'id': '5',
                        'firstName': 'Eric',
                        'lastName': 'Kwok',
                        'picture': 'img/eric.png',
                        'Title': 'Technical Lead'
                    },
                    {
                        'id': '6',
                        'firstName': 'Hayley',
                        'lastName': 'Crimmins',
                        'picture': 'img/hayley.png',
                        'Title': 'Dev Manager'
                    }
                ];*/
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
                PeopleListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PeopleListService);
                return PeopleListService;
            }());
            exports_1("PeopleListService", PeopleListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC9zZXJ2aWNlL3Blb3BsZS1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQTtnQkF1S0EsQ0FBQztnQkF0S0cscUNBQVMsR0FBVDtvQkFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkEyQ0E7b0JBRUosSUFBSSxJQUFJLEdBQUU7d0JBQ1AsTUFBTSxFQUFDOzRCQUNKO2dDQUNHLE1BQU0sRUFBQyxZQUFZO2dDQUNuQixPQUFPLEVBQUMsZ0JBQWdCO2dDQUN4QixhQUFhLEVBQUMsUUFBUTtnQ0FDdEIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxNQUFNOzZCQUNqQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsa0JBQWtCO2dDQUN6QixPQUFPLEVBQUMsc0JBQXNCO2dDQUM5QixhQUFhLEVBQUMsU0FBUztnQ0FDdkIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxTQUFTOzZCQUNwQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsaUJBQWlCO2dDQUN4QixPQUFPLEVBQUMscUJBQXFCO2dDQUM3QixhQUFhLEVBQUMsVUFBVTtnQ0FDeEIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxNQUFNOzZCQUNqQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsUUFBUTtnQ0FDZixPQUFPLEVBQUMsWUFBWTtnQ0FDcEIsYUFBYSxFQUFDLFVBQVU7Z0NBQ3hCLFVBQVUsRUFBQyxTQUFTO2dDQUNwQixRQUFRLEVBQUMsU0FBUzs2QkFDcEI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLGNBQWM7Z0NBQ3JCLE9BQU8sRUFBQyxpQkFBaUI7Z0NBQ3pCLGFBQWEsRUFBQyxhQUFhO2dDQUMzQixVQUFVLEVBQUMsTUFBTTtnQ0FDakIsUUFBUSxFQUFDLE1BQU07NkJBQ2pCOzRCQUNEO2dDQUNHLE1BQU0sRUFBQyxXQUFXO2dDQUNsQixPQUFPLEVBQUMsZUFBZTtnQ0FDdkIsYUFBYSxFQUFDLFFBQVE7Z0NBQ3RCLFVBQVUsRUFBQyxXQUFXO2dDQUN0QixRQUFRLEVBQUMsU0FBUzs2QkFDcEI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLFVBQVU7Z0NBQ2pCLE9BQU8sRUFBQyxjQUFjO2dDQUN0QixhQUFhLEVBQUMsT0FBTztnQ0FDckIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxNQUFNOzZCQUNqQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsTUFBTTtnQ0FDYixPQUFPLEVBQUMsVUFBVTtnQ0FDbEIsYUFBYSxFQUFDLGVBQWU7Z0NBQzdCLFVBQVUsRUFBQyxTQUFTO2dDQUNwQixRQUFRLEVBQUMsU0FBUzs2QkFDcEI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLFVBQVU7Z0NBQ2pCLE9BQU8sRUFBQyxjQUFjO2dDQUN0QixhQUFhLEVBQUMsVUFBVTtnQ0FDeEIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxTQUFTOzZCQUNwQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsU0FBUztnQ0FDaEIsT0FBTyxFQUFDLGFBQWE7Z0NBQ3JCLGFBQWEsRUFBQyxTQUFTO2dDQUN2QixVQUFVLEVBQUMsTUFBTTtnQ0FDakIsUUFBUSxFQUFDLFNBQVM7NkJBQ3BCOzRCQUNEO2dDQUNHLE1BQU0sRUFBQyxXQUFXO2dDQUNsQixPQUFPLEVBQUMsZUFBZTtnQ0FDdkIsYUFBYSxFQUFDLFdBQVc7Z0NBQ3pCLFVBQVUsRUFBQyxTQUFTO2dDQUNwQixRQUFRLEVBQUMsU0FBUzs2QkFDcEI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLFNBQVM7Z0NBQ2hCLE9BQU8sRUFBQyxhQUFhO2dDQUNyQixhQUFhLEVBQUMsUUFBUTtnQ0FDdEIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxLQUFLOzZCQUNoQjs0QkFDRDtnQ0FDRyxNQUFNLEVBQUMsWUFBWTtnQ0FDbkIsT0FBTyxFQUFDLGdCQUFnQjtnQ0FDeEIsYUFBYSxFQUFDLFdBQVc7Z0NBQ3pCLFVBQVUsRUFBQyxTQUFTO2dDQUNwQixRQUFRLEVBQUMsU0FBUzs2QkFDcEI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLGVBQWU7Z0NBQ3RCLE9BQU8sRUFBQyxtQkFBbUI7Z0NBQzNCLGFBQWEsRUFBQyxhQUFhO2dDQUMzQixVQUFVLEVBQUMsU0FBUztnQ0FDcEIsUUFBUSxFQUFDLFNBQVM7NkJBQ3BCOzRCQUNEO2dDQUNHLE1BQU0sRUFBQyxTQUFTO2dDQUNoQixPQUFPLEVBQUMsYUFBYTtnQ0FDckIsYUFBYSxFQUFDLFFBQVE7Z0NBQ3RCLFVBQVUsRUFBQyxNQUFNO2dDQUNqQixRQUFRLEVBQUMsTUFBTTs2QkFDakI7NEJBQ0Q7Z0NBQ0csTUFBTSxFQUFDLFdBQVc7Z0NBQ2xCLE9BQU8sRUFBQyxlQUFlO2dDQUN2QixhQUFhLEVBQUMsY0FBYztnQ0FDNUIsVUFBVSxFQUFDLE1BQU07Z0NBQ2pCLFFBQVEsRUFBQyxNQUFNOzZCQUNqQjt5QkFDSDtxQkFDSCxDQUFDO29CQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBdktMO29CQUFDLGlCQUFVLEVBQUU7O3FDQUFBO2dCQXdLYix3QkFBQztZQUFELENBdktBLEFBdUtDLElBQUE7WUF2S0QsaURBdUtDLENBQUEiLCJmaWxlIjoic2VhcmNoL3NlcnZpY2UvcGVvcGxlLWxpc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZW9wbGVMaXN0U2VydmljZXtcbiAgICBmZXRjaExpc3QoKXtcblxuICAgIC8qbGV0IGRhdGEyID0gW1xuICAgIHtcbiAgICAgICAgJ2lkJzogJzEnLFxuICAgICAgICAnZmlyc3ROYW1lJzogJ1NlYW4nLFxuICAgICAgICAnbGFzdE5hbWUnOiAnS2VycicsXG4gICAgICAgICdwaWN0dXJlJzogJ2ltZy9zZWFuLnBuZycsXG4gICAgICAgICdUaXRsZSc6ICdTZW5pb3IgRGV2ZWxvcGVyJ1xuICAgIH0sXG4gICAgeyBcbiAgICAgICAgJ2lkJzogJzInLFxuICAgICAgICAnZmlyc3ROYW1lJzogJ1lhdycsXG4gICAgICAgICdsYXN0TmFtZSc6ICdMeScsXG4gICAgICAgICdwaWN0dXJlJzogJ2ltZy95YXcucG5nJyxcbiAgICAgICAgJ1RpdGxlJzogJ0FFTSBNYWdpY2lhbidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ2lkJzogJzMnLFxuICAgICAgICAnZmlyc3ROYW1lJzogJ0x1Y3knLFxuICAgICAgICAnbGFzdE5hbWUnOiAnSGVoaXInLFxuICAgICAgICAncGljdHVyZSc6ICdpbWcvbHVjeS5wbmcnLFxuICAgICAgICAnVGl0bGUnOiAnU2NydW0gbWFzdGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICAnaWQnOiAnNCcsXG4gICAgICAgICdmaXJzdE5hbWUnOiAnUm9yeScsXG4gICAgICAgICdsYXN0TmFtZSc6ICdFbHJpY2snLFxuICAgICAgICAncGljdHVyZSc6ICdpbWcvcm9yeS5wbmcnLFxuICAgICAgICAnVGl0bGUnOiAnQUVNIEd1cnUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpZCc6ICc1JyxcbiAgICAgICAgJ2ZpcnN0TmFtZSc6ICdFcmljJyxcbiAgICAgICAgJ2xhc3ROYW1lJzogJ0t3b2snLFxuICAgICAgICAncGljdHVyZSc6ICdpbWcvZXJpYy5wbmcnLFxuICAgICAgICAnVGl0bGUnOiAnVGVjaG5pY2FsIExlYWQnXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdpZCc6ICc2JyxcbiAgICAgICAgJ2ZpcnN0TmFtZSc6ICdIYXlsZXknLFxuICAgICAgICAnbGFzdE5hbWUnOiAnQ3JpbW1pbnMnLFxuICAgICAgICAncGljdHVyZSc6ICdpbWcvaGF5bGV5LnBuZycsXG4gICAgICAgICdUaXRsZSc6ICdEZXYgTWFuYWdlcidcbiAgICB9XG5dOyovXG5cbmxldCBkYXRhID17ICBcbiAgIFwiY2F0c1wiOlsgIFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcImFieXNzaW5pYW5cIixcbiAgICAgICAgIFwiaW1hZ2VcIjpcImFieXNzaW5pYW4uanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJhY3RpdmVcIixcbiAgICAgICAgIFwiZ3Jvb21pbmdcIjpcImVhc3lcIixcbiAgICAgICAgIFwiZW5lcmd5XCI6XCJoaWdoXCJcbiAgICAgIH0sXG4gICAgICB7ICBcbiAgICAgICAgIFwibmFtZVwiOlwiYW1lcmljYW4gYm9idGFpbFwiLFxuICAgICAgICAgXCJpbWFnZVwiOlwiYW1lcmljYW4tYm9idGFpbC5qcGdcIixcbiAgICAgICAgIFwidGVtcGVyYW1lbnRcIjpcImFmZmFibGVcIixcbiAgICAgICAgIFwiZ3Jvb21pbmdcIjpcImVhc3lcIixcbiAgICAgICAgIFwiZW5lcmd5XCI6XCJhdmVyYWdlXCJcbiAgICAgIH0sXG4gICAgICB7ICBcbiAgICAgICAgIFwibmFtZVwiOlwiYXVzdHJhbGlhbiBtaXN0XCIsXG4gICAgICAgICBcImltYWdlXCI6XCJhdXN0cmFsaWFuLW1pc3QuanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJwbGVhc2FudFwiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiZWFzeVwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImhpZ2hcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJiaXJtYW5cIixcbiAgICAgICAgIFwiaW1hZ2VcIjpcImJpcm1hbi5qcGdcIixcbiAgICAgICAgIFwidGVtcGVyYW1lbnRcIjpcInJlc2VydmVkXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJhdmVyYWdlXCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiYXZlcmFnZVwiXG4gICAgICB9LFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcImVneXB0aWFuIG1hdVwiLFxuICAgICAgICAgXCJpbWFnZVwiOlwiZWd5dGlhbi1tYXUuanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJpbnRlbGxpZ2VudFwiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiZWFzeVwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImhpZ2hcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJoaW1hbGF5YW5cIixcbiAgICAgICAgIFwiaW1hZ2VcIjpcImhpbWFsYXlhbi5qcGdcIixcbiAgICAgICAgIFwidGVtcGVyYW1lbnRcIjpcImRvY2lsZVwiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiZGlmZmljdWx0XCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiYXZlcmFnZVwiXG4gICAgICB9LFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcImphdmFuZXNlXCIsXG4gICAgICAgICBcImltYWdlXCI6XCJqYXZhbmVzZS5qcGdcIixcbiAgICAgICAgIFwidGVtcGVyYW1lbnRcIjpcInZvY2FsXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJlYXN5XCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiaGlnaFwiXG4gICAgICB9LFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcIm1hbnhcIixcbiAgICAgICAgIFwiaW1hZ2VcIjpcIm1hbnguanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJldmVuLXRlbXBlcmVkXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJhdmVyYWdlXCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiYXZlcmFnZVwiXG4gICAgICB9LFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcIm5hcG9sZW9uXCIsXG4gICAgICAgICBcImltYWdlXCI6XCJuYXBvbGVvbi5qcGdcIixcbiAgICAgICAgIFwidGVtcGVyYW1lbnRcIjpcImNoYXJtaW5nXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJoaWdoXCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiYXZlcmFnZVwiXG4gICAgICB9LFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcInBlcnNpYW5cIixcbiAgICAgICAgIFwiaW1hZ2VcIjpcInBlcnNpYW4uanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJwYXNzaXZlXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJoaWdoXCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiYXZlcmFnZVwiXG4gICAgICB9LFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcInBldGVyYmFsZFwiLFxuICAgICAgICAgXCJpbWFnZVwiOlwicGV0ZXJiYWxkLmpwZ1wiLFxuICAgICAgICAgXCJ0ZW1wZXJhbWVudFwiOlwiZGVtYW5kaW5nXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJhdmVyYWdlXCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiYXZlcmFnZVwiXG4gICAgICB9LFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcInJhZ2RvbGxcIixcbiAgICAgICAgIFwiaW1hZ2VcIjpcInJhZ2RvbGwuanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJwbGFjaWRcIixcbiAgICAgICAgIFwiZ3Jvb21pbmdcIjpcImVhc3lcIixcbiAgICAgICAgIFwiZW5lcmd5XCI6XCJsb3dcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJyYWdhbXVmZmluXCIsXG4gICAgICAgICBcImltYWdlXCI6XCJyYWdhbXVmZmluLmpwZ1wiLFxuICAgICAgICAgXCJ0ZW1wZXJhbWVudFwiOlwibGFpZC1iYWNrXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJhdmVyYWdlXCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiYXZlcmFnZVwiXG4gICAgICB9LFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcInNjb3R0aXNoIGZvbGRcIixcbiAgICAgICAgIFwiaW1hZ2VcIjpcInNjb3R0aXNoLWZvbGQuanBnXCIsXG4gICAgICAgICBcInRlbXBlcmFtZW50XCI6XCJlYXN5IG5hdHVyZVwiLFxuICAgICAgICAgXCJncm9vbWluZ1wiOlwiYXZlcmFnZVwiLFxuICAgICAgICAgXCJlbmVyZ3lcIjpcImF2ZXJhZ2VcIlxuICAgICAgfSxcbiAgICAgIHsgIFxuICAgICAgICAgXCJuYW1lXCI6XCJzaWFtZXNlXCIsXG4gICAgICAgICBcImltYWdlXCI6XCJzaWFtZXNlLmpwZ1wiLFxuICAgICAgICAgXCJ0ZW1wZXJhbWVudFwiOlwiYWN0aXZlXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJlYXN5XCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiaGlnaFwiXG4gICAgICB9LFxuICAgICAgeyAgXG4gICAgICAgICBcIm5hbWVcIjpcInNpbmdhcHVyYVwiLFxuICAgICAgICAgXCJpbWFnZVwiOlwic2luZ2FwdXJhLmpwZ1wiLFxuICAgICAgICAgXCJ0ZW1wZXJhbWVudFwiOlwiYWZmZWN0aW9uYXRlXCIsXG4gICAgICAgICBcImdyb29taW5nXCI6XCJlYXN5XCIsXG4gICAgICAgICBcImVuZXJneVwiOlwiaGlnaFwiXG4gICAgICB9XG4gICBdXG59O1xuXG4gICAgICAgIHJldHVybiBkYXRhW1wiY2F0c1wiXTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
