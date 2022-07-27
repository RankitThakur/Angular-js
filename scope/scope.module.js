var scopeApp = angular.module("myScope", []);
scopeApp.controller("scopeCon", function($scope){
    $scope.nameData = "rankit";
});

// scopeApp.directive('message', function(){
//     return {
//         templateUrl:"directive.html",
//         scope: true
//     };
// });

scopeApp.directive('message', function(){
    return {
        templateUrl:"directive.html",
        scope: {
            // x: '@',
            y: '@'
        }
    };
});
scopeApp.run(function($rootScope){
    $rootScope.nameData="new data";
})