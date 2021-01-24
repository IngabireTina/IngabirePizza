$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");

        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    })

});

var pizza = function(pizzaName, pizzaCrust, pizzaSize){
    this.pizzaName = pizzaName;
    this.pizzaCrust = pizzaCrust;
    this.pizzaSize = pizzaSize;
    this.toppings = [];
    this.isDelivered = false;

}

 var topping = function(toppingName, toppingPrice){
     this.toppingName = toppingName;
     this.toppingPrice = toppingPrice;
 }
 
 pizza.prototype.getDeliveryPrice = function(){
     return 1000;
 }

 pizza.prototype.setDeliveryAddress = function(deliveryAddress){
     this.deliveryAddress = deliveryAddress;
 }

 pizza.prototype.getPizzaSizePrice = function(pizzaSize){
     if(pizzaSize === "small"){
         return 1000;
     }
     else if(pizzaSize === "medium"){
         return 2000;
     }else{
         return 2500;
     }
 }

pizza.prototype.getPizzaCrustPrice = function(crust){
    if(this.pizzaCrust === "crispy"){
        return 1000;
    }
    else if(this.pizzaCrust === "stuffed"){
        return 1500;
    }
    else{
        return 800;
    }
}
