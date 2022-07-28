var myApp = angular.module('DemoApp', ['firebase']);

myApp.constant("FIREBASE_URL", "https://newdatatodo-default-rtdb.firebaseio.com/" )
myApp.controller("DemoCtrl", function ($scope, $firebase, FIREBASE_URL) {

var todosRef = new Firebase(FIREBASE_URL);
$scope.todos = $firebase(todosRef);
$scope.changeStatus   = function (item) {
	$firebase(itemRef).$set({
    name : item.name,
  });
}
	$scope.removeItem   = function (index, item, event) {
			$scope.todos.$remove(item.id);
	}
	$scope.addItem  = function () {
    var timestamp = new Date().valueOf()
    // Get the Firebase reference of the item
    var itemRef = new Firebase(FIREBASE_URL + timestamp);
    $firebase(itemRef).$set({
      id: timestamp,
      name : $scope.todoName,
  });
  $scope.todoName = "";
}
})