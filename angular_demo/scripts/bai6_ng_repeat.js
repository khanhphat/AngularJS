(function () {
    'use strict';
    //0.khai bao module app
    var app = angular.module('app', []);
    //1.dung module 'app' de tao controller
    app.controller('repeatController', repeatController);

    //2.Tim service scope vao controller
    repeatController.$inject = ['$scope'];

    function repeatController($scope) {
       //khai bao 1 mang. dang json
        var employees = [
            {firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000},
            {firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000},
            {firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000},
            {firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000},
            {firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000},
            {firstName: "Phat", lastName: "Nguyen", gender: "Male", salary: 17000}
        ];
        //gan vao scope = chinhs cai list<employees>. 
        //$scope.employees con goi la model
        $scope.employees = employees;

    }
})();