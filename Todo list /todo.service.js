app.service("StudentService", function($http) {  
    //get All Eployee  
    this.getAllStudents = function() {  
        return $http.get("https://todonew-5bc3d-default-rtdb.firebaseio.com/products.json");  
    }
});  
