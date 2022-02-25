purchesData={
    name:"COTTON SHIRT",
    image:"https://static.zara.net/photos///2022/V/0/2/p/8281/469/916/2/w/750/8281469916_1_1_1.jpg?ts=1644942934779",
    select:"S",
    price:3000,

    material:"We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products."
}

// document.querySelector("cartbtn").addEventListener("click",purchase)

// var purchesData=JSON.parse(localStorage.getItem("purchaseData"))

// var cartData=JSON.parse(localStorage.getItem("purchaseData"))||[];

// function display(){

//   function purchase(){

  
       var detaile=document.querySelector("#left")
       var materialDetails=document.createElement("span");
       materialDetails.style.fontSize="12px";
        materialDetails.innerText=purchesData.material;

       detaile.append(materialDetails)

      var mid= document.querySelector("#mid")
      var image=document.createElement("img")
      image.setAttribute("src",purchesData.image)

      mid.append(image)

      var right=document.querySelector("#right")

      var productName=document.createElement("h3");
      productName.innerText=purchesData.name;
    
   

      var material=document.createElement("p");
      material.innerText=purchesData.material;
      material.style.marginTop="10px"

      divPrice=document.createElement("div")
      divPrice.setAttribute("id","price")

      var price=document.createElement("h4");
      price.setAttribute("id","price")
      price.innerText="₹ "+purchesData.price;
      divPrice.append(price)

      var tax=document.querySelector("p")
           tax.innerText="MRP incl. of all taxes"
           tax.style.marginTop="5px"

      var size=document.createElement("p");
           size.setAttribute("id","elmentsize")
      size.innerText="SIZE"
      size.style.margin="30px 0px 0px 0px"

      var select=document.createElement("select")
          select.setAttribute("value","select")
          select.setAttribute("id","select_select")
          

      var option1=document.createElement("option")
          option1.value=purchesData.select;
          option1.innerText="S (UK S)";
      var option2=document.createElement("option")
          option2.value=purchesData.select;
          option2.innerText="M (UK M)"
      var option3=document.createElement("option")
          option3.value=purchesData.select;
          option3.innerText="L (UK L)"

        select.add(option1)
        select.add(option2)
        select.add(option3)

      findSize=document.createElement("div")
      findSize.setAttribute("id","findSize")
      var yourSize=document.createElement("div").innerText="FIND YOUR "
    //   yourSize.setAttribute("id","setsize")
      var sizGuide=document.createElement("div").innerText="SIZE GUIDE"
    //   sizGuide.setAttribute("id","setguid")
        
        findSize.append(yourSize,sizGuide)

        var cartdiv=document.createElement("div")
        var cartbtn=document.createElement("button")
        cartbtn.setAttribute("id","cartbtn")
        cartbtn.innerText="ADD TO CART" 
        cartbtn.style.cursor="pointer"

        cartbtn.addEventListener("click",function(){
            takeMeToCart()
        })
        cartdiv.append(cartbtn) 

        right.append(productName,material, divPrice,tax,size,select,findSize,cartdiv)



        cartData.push(purchesData)

        localStorage.setItem("cartData",JSON.stringify(cartData));

        // window.location.href="/Pages/cart.html"

    // }
// }
// display();
function takeMeToCart(){
        window.location.href="/Pages/cart.html"


}
