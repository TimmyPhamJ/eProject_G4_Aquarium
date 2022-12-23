var myApp =angular.module("myApp", [
    'ngRoute',
    'homedefault',
    'activities'
]);

myApp.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"homedefault.html",controller:"homedefaultCtrl"
    })
    .when("/activities",{
        templateUrl:"activities.html",controller:"activitiesCtrl"
    })
})


angular.module("homedefault",[])
    .controller("homedefaultCtrl",['$scope','$http',function($scope,$http){

}]);

angular.module("activities",[])
    .controller("activitiesCtrl",['$scope','$http',function($scope,$http){

}]);