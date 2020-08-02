(function(){
    'use-strict';
    angular.module('NarrowItDownApp', [])

    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var narrow = this;
        var promise = MenuSearchService.getMenuCategories();

        promise.then(function (response){

            narrow.categories = response.data.menu_items;
            //console.log("narrow.categories is following", narrow.categories);
            
            
            narrow.getMatchedMenuItems = function(searchItem){
                
                var searchItem = narrow.searchItem.toLowerCase();
                console.log("searching menu items for: " , searchItem);
                narrow.found = [];

                for(var i = 0; i<narrow.categories.length; i++){

                    if(narrow.categories[i].description.toLowerCase().includes(searchItem)){
    
                        
                        narrow.found.push(narrow.categories[i]);
                        console.log(narrow.found);
                    }
                };

                narrow.removeItem = function(itemIndex){

                    narrow.found.splice(itemIndex, 1);
                };

                narrow.checkButton = function(){

                    if(narrow.found.length == 0 || searchItem == null || searchItem == " " ){
                        
                        return true;
                    }
                };
    
            }

            
        })
            .catch(function (error){
                
                console.log("Something went wrong!");
                console.log(error);
        });      

    }; // end of controller

    function FoundItems(){

        var ddo = {
            templateUrl: 'listItem.html'
        };

        return ddo;

    }; // end of custom directive

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var service = this;
        service.getMenuCategories = function (){
            var response = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
                 
            });
            
            return response;
        };

        


    }; //end of service 

})();