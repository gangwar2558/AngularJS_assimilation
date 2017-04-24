(function(){ 
    angular.module('app').directive('stakeHolder',function(){
        return{
                restrict : 'E',
                templateUrl: 'templates/directives/stake-holder.html'
              };                                                   
    });
})();