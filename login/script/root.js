var app= angular.module('login',[]);
    
app.controller('loginController',function($scope){

	$scope.username;
	$scope.password;
    
    $scope.ValidateLogin = function(){
        
        if($scope.username == 'admin' && $scope.password == 'admin')
            {
                location.href='./../application/application-page.html';
            }
        else{
                bootbox.alert("Wrong Username and Password");
        }
    };
});    

