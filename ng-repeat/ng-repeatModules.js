var ngRep = angular.module("myRep", []);

ngRep.controller("ngRepController", function($scope){
  $scope.arr = ["rankit", "newStudent", "new", "array" ]
  $scope.obj = {name:"rankit", age:23, gen:"M"}
  $scope.objArr = [
    {name:"rankit", age:23, gen:"M"},
    {name:"ankit", age:25, gen:"M"},
    {name:"sunny", age:25, gen:"M"},
    {name:"rajul", age:23, gen:"M"}
  ]
})