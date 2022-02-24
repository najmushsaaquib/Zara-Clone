var cartPro = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartPro);

cartPro.map(function(elem,index,array){
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src",elem.img)
    var name1 = document.createElement("p");
     name1.innerText = elem.name
     var price = document.createElement("p");
     price.innerText = elem.price
     var stprice = document.createElement("s");
     stprice.innerText = elem.stprice
     var button = document.createElement("Button");
     button.innerText = "Add+"
     var button2 = document.createElement("Button");
     button2.innerText = "Remove-"
     elem.quant =1;
     console.log(elem.quant)
     box.append(img,name1,price,stprice,button,button2);
     document.querySelector("#container2").append(box);
   
  
});

cartPro.map(function(elem,index,arr) {
    var qty = document.createElement("h4");
    qty.innerText = index

   document.querySelector("#quantity").append(qty);
})
function totalsum(){
    var total = document.createElement("h4");
    var sum = cartPro.reduce(function(acc,elem) {
      
       return acc+(elem.price*elem.quant)
    
       
    },0)
    var totalPrice = document.querySelector("#totalam")
    totalPrice.innerText = sum
}

function PriceSort(){
 var selected = document.querySelector("#select").value 
if(selected==="L2H"){
    cartPro.sort(function(a,b){
        return a.price-b.price;
    }); 
}
if(selected==="H2L"){
    cartPro.sort(function(a,b){
        return b.price-a.price;
    });
}
}

function AlphaSort(){
    var selected = document.querySelector("#select").value 
   if(selected==="L2H"){
       cartPro.sort(function(a,b){
           return a.price-b.price;
       }); 
   }
   if(selected==="H2L"){
       cartPro.sort(function(a,b){
           return b.price-a.price;
       });
   }
   }






