(function(){
    'use-strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', lunchChecker)

    lunchChecker.$inject = ['$scope'];

    function lunchChecker($scope){
       
        $scope.lunch = function(){

            $scope.text == " ";
            
            var textInput = $scope.textInput;
            console.log(textInput);

            if(textInput == "" || textInput == null){
    
                $scope.text = "Please enter some data";
            }
    
            else{
                
                const tot_items = textInput.split(',');
                //console.log(tot_items);

                var item_length = tot_items.length;
                console.log('Length is ' +item_length);

                if(item_length > 3){
    
                    $scope.text = "Too Much!";
                }
                else if(item_length <= 3){
        
                    $scope.text = "Enjoy!";
                }
            }
        };
       

    };
}
)();
