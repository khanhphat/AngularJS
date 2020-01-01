(function () {
    'use strict';
    //0.khai bao module app
    var app = angular.module('handleEvent', []);
    //1.dung module 'app' de tao controller
    app.controller('handleEventController', handleEventController);

    //2.Tim service scope vao controller
    handleEventController.$inject = ['$scope'];

    function handleEventController($scope) {
        //khai bao 1 mang. dang json
        var technologies = [
            { name: "C#", like: 0, dislike:0 },
            { name: "ASP.NET", like: 0, dislike:0 },
            { name: "SQL SERVER", like: 0, dislike:0 },
            { name: "AngularJS", like: 0, dislike:0 }
           
        ];
        //gan vao scope = chinhs cai list<employees>. 
        //$scope.employees con goi la model
        $scope.technologies = technologies;
        $scope.increaseLike = function (technology) {
            //moi lan click se tang 1 va gan la model technology. va tu update view "two-way binding"
            technology.like++;
        }
        $scope.increaseDislike = function (technology) {
            technology.like--;
        }

    }
})();