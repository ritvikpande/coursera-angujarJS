(function(){
    'use-strict'; 
    angular.module('ShoppingListCheckOff', [])
    
    .controller('ToBuyController', ToBuyController)  
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    //Controller-1
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){

        var showList = this;
        showList.items = ShoppingListCheckOffService.getItems();
        
        showList.removeItem = function(itemIndex){
            ShoppingListCheckOffService.addItems(showList.items[itemIndex].name, showList.items[itemIndex].quantity);
            ShoppingListCheckOffService.removeItem(itemIndex);  
        };
    }

    //Controller-2
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        
        var addList = this;
        var flag;
        addList.newItems = ShoppingListCheckOffService.getBoughtItems();       
   }

   //Service 1 Function
   function ShoppingListCheckOffService(){

        var service = this;
        // Shopping List 
        var items = [
            {
                name: "Chips",
                quantity: "10 bags"
            },
            {
                name: "Cola",
                quantity: "20 bottles"
            },
            {
                name: "Soap",
                quantity: "5 bars"
            },
            {
                name: "Cookies",
                quantity: "100 bags"
            },
            {
                name: "Eggs",
                quantity: "5 dozen"
            }
        ];

        service.getItems = function(){
            return items;
        };

        service.removeItem = function(itemIndex){

            items.splice(itemIndex, 1);
        };

        var itemsBought = [];
        service.addItems = function(itemName, quantity){

            var boughtItems = [];
            var item = {

                name: itemName,
                quantity: quantity
            }; 
             
            itemsBought.push(item);
            console.log(itemsBought);
        };

        service.getBoughtItems = function(){

            return itemsBought;           
        };

   }

})();