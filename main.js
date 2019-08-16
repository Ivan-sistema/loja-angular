(function(){
    angular.module('ecommerce', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl:'templates/loja.tpl.html',
            controller: 'carrinhoCtrl'
        })
        .when('/carrinho', {
            templateUrl:'templates/carrinho.tpl.html',
            controller: 'carrinhoCtrl'
        })
        .otherwise({
            redirectTo:'/'
        })
    }])
})()