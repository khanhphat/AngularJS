//create a module
var myApp = angular.module('myModule', []);

myApp.controller('myController', myController);

function myController($scope) {
    //khai bao 1 object
    var employee = {
        FirstName: "Phat",
        LastName: "Nguyen",
        Gender: "Male"
    }

    //truyen ra view
    $scope.employee = employee;
}