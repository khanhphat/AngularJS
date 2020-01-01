//create a module
var myApp = angular.module('myModule', []);

myApp.controller('myController', function ($scope) {
    //khai bao object
    var employee = {
        FirstName: "Phat",
        LastName: "Nguyen",
        Gender: "Male"
    }

    //truyen ra view
    $scope.employee = employee;
});
