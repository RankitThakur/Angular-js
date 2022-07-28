var myApp = angular.module('todoApp', ['firebase']);

myApp.constant("FIREBASE_URL", "https://newdatatodo-default-rtdb.firebaseio.com/" )
myApp.controller("todoAppCon", function ($scope, $firebase, FIREBASE_URL) {
  $scope.todoName = "";
  var todosRef = new Firebase(FIREBASE_URL);
  $scope.editIteam = function(item){
    $scope.userName = this.item.name;
  };
  $scope.updateIteam = function(){
    var name = $scope.id
    var data = this.$item.$getRecord(name)
    data.name = $scope.name;
    $scope.name = "";
  };
  $scope.todos = $firebase(todosRef);
  $scope.changeStatus   = function (item) {
	  $firebase(itemRef).$set({
    name : item.name,
    });
  };
	$scope.removeItem = function (index, item, event) {
		$scope.todos.$remove(item.id);
	};
	$scope.addItem  = function () {
    var timestamp = new Date().valueOf()
    var itemRef = new Firebase(FIREBASE_URL + timestamp);
    $firebase(itemRef).$set({
      id: timestamp,
      name : $scope.todoName,
    })
  };
});