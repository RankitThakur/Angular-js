var app = angular.module("todoMod", [])
app.controller("todoController", function($scope, $http){
  $scope.products =[ 
    {

    }
   ];

  // $scope.onAddProduct = function(){        
  //   $scope.products.push(
  //     {
  //      "name": $scope.data.name,
  //     },
  //   );
    
  // };
    $scope.deleteData = function(index){
    var index = this.$index
    $scope.products.splice(index,1);
  };

  $scope.editItem = function () {
    var index = this.$index
    $scope.editItem.index = index;
    $scope.editItem.userName = $scope.products[index].name
  }

  $scope.updateUser = function(){
    var index = $scope.editItem.index;
    $scope.products[index]=
      {
       "name": $scope.editItem.userName,
      }
  };

  $scope.postData= function() {
    let setting = {
      "url": "https://todonew-5bc3d-default-rtdb.firebaseio.com/data.json",
      "method": "put",
      "data": $scope.data
    }
    $http(setting)
    .then(function(response) {
      $scope.products.push (
        [{
        "name": $scope.data.name,
        }]
      );
    });
  }  
 $scope.getData=function() {
   $http.get("https://todonew-5bc3d-default-rtdb.firebaseio.com/data.json")
  .then(function (response) {
      $scope.data = response.data;
      console.log('Data',$scope.data);
      // console.log("success")
      // console.log(response)
   });
  }

})


// let setting =   {
//     "url": "https://angular-js-1b4de-default-rtdb.firebaseio.com/products.json",
//     "method": "put",
//     "data": $scope.iteam
// }
// $http(setting)
// .then(function(response){
//     console.log(response)
// })
