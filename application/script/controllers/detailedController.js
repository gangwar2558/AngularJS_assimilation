(function(){
     angular.module('app')
         .controller('detailedController',['$scope',function($scope){
            
             $scope.value = 0;
             $scope.setbuttonId = function(selected_value){
                $scope.value = selected_value;
            }
         
     }]);
    
})();