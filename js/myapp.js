var myApp =angular.module("myApp", [
    'ngRoute',
    'home',
    'active',
    'event',
    'contact',
    'about',
    'plan',
    'menu'
]);

myApp.config(["$routeProvider","$locationProvider",function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"home.html",controller:"homeCtrl"
    })
    .when("/active",{
        templateUrl:"activities.html",controller:"activeCtrl"
    })
    .when("/event",{
        templateUrl:"events.html",controller:"eventCtrl"
    })
    .when("/contact",{
        templateUrl:"contact.html",controller:"contactCtrl"
    })
    .when("/about",{
        templateUrl:"about.html",controller:"aboutCtrl"
    })
    .when("/plan",{
        templateUrl:"plan.html",controller:"planCtrl"
    })

}]);


angular.module("home",[])
    .controller("homeCtrl",['$scope','$http',function($scope,$http){
        $http.get("/json/home.json")
        .then(function(response){
            $scope.HomeList = response.data;
            console.log(response.data);
        },
        function(err){
            $scope.HomeList = "Request JSON failed.";
        });

}]);

angular.module("active",[])
    .controller("activeCtrl",['$scope','$http',function($scope,$http){
        $http.get("../json/activities.json")
        .then(function(response){
            $scope.ActivitiesList = response.data;
            console.log(response.data);
        },
        function(err){
            $scope.ActivitiesList = "Request JSON failed.";
        });
}]);

angular.module("event",[])
    .controller("eventCtrl",['$scope','$http',function($scope,$http){

}]);

angular.module("contact",[])
    .controller("contactCtrl",['$scope','$http',function($scope,$http){

}]);

angular.module("about",[])
    .controller("aboutCtrl",['$scope','$http',function($scope,$http){

}]);

angular.module("plan",[])
    .controller("planCtrl",['$scope','$http',function($scope,$http){

}]);

angular.module("menu",[])
    .controller("menuCtrl",['$scope','$location','$route',function($scope,$location,$route){
        $scope.activePath =null;
        $scope.$on('$routeChangeSuccess',function(){
            $scope.activePath = $location.path();
            console.log($location.path());
        });
    }]);