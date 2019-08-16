(function(){
    angular.module('ecommerce')
    .factory('carrinhoFactory', [function(){

        var carrinho = [];

        return {
            getProducts: function(){
                return carrinho;
            },
            setProducts: function(product){
                carrinho.push(product)
            },
            removeProducts: function(){
               carrinho = carrinho.filter(function(itemCart){
                   if(itemCart.selected !== true) return itemCart;
               })

            },
            getTotal: function(){
                var total = 0;

                if(carrinho.length >= 1){
                    carrinho.filter(function(produto){
                        total += produto.price;
                    })
                }
                return Math.round(total) + ",00";

            }
        }
    }])
})();