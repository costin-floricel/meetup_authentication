// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // meets page that will use the MeetController
        .when('/meets', {
            templateUrl: 'views/meet.html',
            controller: 'MeetController'
        });

    $locationProvider.html5Mode(true);

}]);