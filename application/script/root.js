 (function(){

    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider){
      $routeProvider
          .when('/dashboard', {
        templateUrl: 'templates/pages/dashboard-page.html',
        controller: 'dashboardController'
      })
      .when('/detailed', {
        templateUrl: 'templates/pages/detailed-page.html',
          controller:'detailedController'
      })
      .otherwise({
          redirectTo:'/dashboard'
      })
    });
    
})();
