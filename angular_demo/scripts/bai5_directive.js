var myApp = angular.module('demo', [])
    .controller('myController', function ($scope) {

    }).directive("dinhnghiaDirective", function () {
        //bat buoc directive phai return ve 1 cai gi day
        //html = "<h1> Xin chao Phat </h1>";
        return {
            templateUrl: '/customDirective.html'
        }
    });

