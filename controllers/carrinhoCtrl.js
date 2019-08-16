(function(){
    angular.module('ecommerce')
    .controller('carrinhoCtrl', ['$scope','$http', '$location', 'carrinhoFactory', carrinho]);
    function carrinho($scope, $http, $location, carrinhoFactory){

            var shoppingCart = carrinhoFactory;
   
            $scope.produtos = [];
            $scope.carrinho = shoppingCart.getProducts() || [];

            var getTotal = function(){
                 $scope.total = shoppingCart.getTotal();
            }
            getTotal();
           


            //GET DATA PRODUCT IN SERVER
            var getProd = function(){
                $http.get('/produtos.json')
                .then(function(res){
                    $scope.produtos = res.data;
                })
                .catch(function(error){
                    console.log(error)
                })
            }

            getProd();

            //REDIRECT TO SHOPPINGCART
            var redirect = function(){
                setTimeout(function(){
                    var url  = $location.url('/carrinho');
                    var redirect = url.absUrl();
                    window.location.href = redirect;
                }, 1000)
            }

            //ADD A PRODUCT IN SHOPPINGCART AND REDIRECT
            $scope.addShoppingCart = function(prod){

                shoppingCart.setProducts(prod);
                $scope.carrinho = shoppingCart.getProducts();

                window.location.href = "/#!/carrinho"            
                
            }

            //REMOVE PRODUCTS IN SHOPPINGCART
            $scope.removeProdutos = function(){
               shoppingCart.removeProducts();
               $scope.carrinho = shoppingCart.getProducts(); 
               $scope.total = shoppingCart.getTotal(); 
            }
    }
})();