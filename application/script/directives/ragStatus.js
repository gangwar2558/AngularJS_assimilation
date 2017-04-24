(function(){
    angular.module('app').directive('ragStatus', function(){
        return{
                restrict: 'E',
                templateUrl:'templates/directives/rag-status.html'
        };
    });
})();