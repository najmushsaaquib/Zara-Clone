var data = JSON.parse(localStorage.getItem("data")) || []
// first function which map all elements into the first basic page: this function is called as "visible"
// Due to limited data we are using grid method to show them in a representable way.
visible()
function visible()
{
    document.querySelector("#viewAll").style.fontWeight = "bold"
    document.querySelector("#container").innerHTML = ""


    data.map(function (elem) {
    var box= document.createElement("div")
    var img = document.createElement("img")
    var name = document.createElement("p")
    var innerContainer = document.createElement("div")
    var price = document.createElement("p")
        img.addEventListener("click", function () {
        purchase(elem)
        });

        box.setAttribute("class", elem.class)
        box.style.gridArea= elem.class
        img.src = elem.img
        name.innerText = elem.name
        price.innerText = "₹" + elem.price
        innerContainer.style.fontFamily = "sans-serif"
        innerContainer.style.fontSize = "12px"
        innerContainer.style.color = "rgb(97, 94, 94)"
        innerContainer.append(name,price)
        innerContainer.style.display = "flex"
        innerContainer.style.justifyContent = "space-between"

        box.append(img,innerContainer)
        document.querySelector("#container").append(box)
    })
}

function purchase(elem)
{
    if (JSON.parse(localStorage.getItem("loginData")).length != 0) {
        window.location.href = "/pages/purchase.html"
        localStorage.setItem("purchaseData", JSON.stringify(elem))
    }
    else {
        window.location.href = "/pages/login.html"
    }
}

document.querySelector("#viewAll").addEventListener("click", function () {
    visible()
})
document.querySelector("#men").addEventListener("click", function () {
    window.location.href = "/pages/men.html"
})
document.querySelector("#women").addEventListener("click", function () {
    window.location.href = "/pages/women.html"
})
document.querySelector("#kids").addEventListener("click", function () {
    window.location.href = "/pages/kids.html"
})


// ad pop up script
// window.addEventListener("load", function(){
//     setTimeout(
//         function open(event){
//             document.querySelector(".popup").style.display = "block";
//         },
//         1000 
//     )
// });
// document.querySelector("#close").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// });