/// <reference path="angular.min.js" />

//create a module
var myApp = angular.module('myModule', []);

//c1:
//myApp.controller('myController', myController);

//services $scope là cầu nối giữa controller view model. nó giúp cho việc kết nối cho view va controller.
//function myController($scope) {
//    $scope.message = "Angular JS Application";
//}

//c2: khai báo hàm nặc danh
myApp.controller('myController', function ($scope) {
    $scope.message = "Angular JS Application3";
});