(function () {
    'use strict';
    //0.khai bao module app
    var app = angular.module('filterApp', []);
    //1.dung module 'app' de tao controller
    app.controller('filterController', filterController);

    //2.Tim service scope vao controller
    filterController.$inject = ['$scope'];

    function filterController($scope) {
        //khai bao 1 mang. dang json
        var employees = [
            {name: 'Phat', dateOfBirth: new Date('10/05/1994'), salary: 1000, gender: 'Male', status: true},
            { name: 'Quoc', dateOfBirth: new Date('05/03/1992'), salary: 1200, gender: 'Male', status: false},
            { name: 'Nga', dateOfBirth: new Date('11/02/1993'), salary: 1300, gender: 'Female', status: true },
            { name: 'Nam', dateOfBirth: new Date('10/05/1990'), salary: 2400, gender: 'Male', status: false },
            { name: 'Huyen', dateOfBirth: new Date('09/11/1991'), salary: 1400, gender: 'female', status: true},
            { name: 'Viet', dateOfBirth: new Date('02/12/1989'), salary: 1500, gender: 'Male', status: true},
            { name: 'Tuan', dateOfBirth: new Date('03/07/1988'), salary: 2700, gender: 'Male', status: false},
            { name: 'Yen', dateOfBirth: new Date('10/25/1987'), salary: 2800, gender: 'female', status: true},
            { name: 'Nghiep', dateOfBirth: new Date('10/15/1986'), salary: 1900, gender: 'Male', status: false}
        ];
        $scope.employees = employees;
        $scope.limitRow = 3;
    }
    //dinh nghia filter voi method filter
    app.filter('status', function () {
        return function (input) {
            if (input == true)
                return 'Kích hoạt';
            else
                return 'Khóa';
        }

    });
})();