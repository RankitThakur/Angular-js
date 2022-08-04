angular.module('MyApp', [])
.filter('compute',[function(){
  return function(number)
  {
    if(number<0){
      return 0;
    }
    return number+1;
  }
}])