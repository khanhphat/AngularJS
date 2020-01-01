(function () {
    'use strict';
    //0.khai bao module app
    var app = angular.module('app', []);
    //1.dung module 'app' de tao controller
    app.controller('nestedRepeatController', nestedRepeatController);

    //2.Tim service scope vao controller
    nestedRepeatController.$inject = ['$scope'];

    function nestedRepeatController($scope) {
        //khai bao 1 mang. dang json
        var countries = [
            {
                name: "VIET NAME",
                cities: [
                    { name: "HA NOI" },
                    { name: "DA NANG" },
                    { name: "HO CHI MINH" }
                ]
            },
            {
                name: "NHA TRANG",
                cities: [
                    { name: "CAM RANH" },
                    { name: "NINH HOA" },
                    { name: "LAC AN"}
                ]
            },
            {
                name: "HO CHI MINH",
                cities: [
                    { name: "QUAN 1" },
                    { name: "QUAN 2" },
                    { name: "QUAN 3" }
                ]
            },
            {
                name: "USA",
                cities: [
                    { name: "American Samoa" },
                    { name: "American Samoa" },
                    { name: "American Samoa" }
                ]
            }
        ];
        //gan vao scope = chinhs cai list<countries>.
        //$scope.countries con goi la model
        $scope.countries = countries;

    }
})();