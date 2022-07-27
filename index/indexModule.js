var app = angular.module("myModData", [ "ngRoute"]);
app.config(
  [
   "$routeProvider", 
    function($routeProvider){
      $routeProvider
      .when("/hideAndShow", 
      {
        templateUrl:"/hideshow/hideAndShow.html",
        controller: "myHideShow"
      })
      .when("/page1", 
      {
        templateUrl:"/page1.html",
        controller: "myDataController2"
      })
      .when("/events",
      {
        templateUrl:"/viewpages/event.html"
      })
      .when("/locationServices",
      {
        templateUrl:"/locationServices/index.html"
      })
      .otherwise(
      {
        redirectTo:"index.html"
      }) 
    }
  ]
)

app.controller("mainController", function($scope){
})

app.controller("myHideShow", function($scope){
  $scope.cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": 2017-01-03,
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": 2018-03-03,
      "capacity": 5
    },
  ]
})

app.controller("myDataController2", function($scope){
  $scope.number = 2;
  $scope.myFun = function() {
      alert("click me ")
      
  };
 $scope.myFun2 = function() {
      $scope.number++;
  };
});