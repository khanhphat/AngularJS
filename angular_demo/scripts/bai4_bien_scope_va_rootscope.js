var myApp = angular.module('scopeDemo', []);

myApp.controller('classController', classController);
myApp.controller('schoolController', schoolController);
myApp.controller('topController', topController);

function classController($scope) {
    $scope.name = "-scope-1- Khánh Phát";
    //$scope.sayHello = function () {
    //    $scope.name = "Hello " + $scope.name + "!";
    //}
}


function schoolController($scope, $rootScope) {
    $scope.name = "-scope-2- Nguyễn Hữu Khánh Phát";
    //$scope.sayHello = function () {
    //    $scope.name = "Hello " + $scope.name + "!";
    //}
}
function topController($scope, $rootScope) {
    $scope.name = "đây là controller lồng nhau";
}