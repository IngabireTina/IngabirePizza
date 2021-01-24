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

pizza.prototype.setToppings = function(toppings){
    for(var i=0; i<toppings.length; i++) {

        if(toppings[i] === "onion"){
            this.toppings.push(onion)
        }
        if(toppings[i] === "tomatoe"){
            this.toppings.push(tomatoe)
        }
        if(toppings[i] === "cheese"){
            this.toppings.push(cheese)
        }
        if(toppings[i] === "spinach"){
            this.toppings.push(spinach)
        }
        if(toppings[i] === "mushroom"){
            this.toppings.push(mushroom)
        }
        if(toppings[i] === "olive"){
            this.toppings.push(olive)
        }
        if(toppings[i] === "chicken"){
            this.toppings.push(chicken)
        }
        if(toppings[i] === "saucage"){
            this.toppings.push(saucage)
        }
        if(toppings[i] === "ham"){
            this.toppings.push(ham)
        }
        if(toppings[i] === "pepper"){
            this.toppings.push(pepper)
        }
    } 
}