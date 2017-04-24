(function(){
    
    angular.module('app')
        .controller('dashboardController',['$scope', function($scope){
            
            $scope.value = 0;
            $scope.tab_val = 0;
            
            $scope.setbuttonId = function(selected_value){
                $scope.value = selected_value;
            }
            $scope.settabId = function(selected_tab){
                $scope.tab_val = selected_tab;
            }
        }]);
})();
