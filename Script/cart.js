var cartData = JSON.parse(localStorage.getItem("cartData"))
all();
function all() {
    var shoppingNumber = document.querySelector("#shoppingNumber")
    shoppingNumber.innerText = "Shopping Bag (" + cartData.length + ")" || 0;
    document.querySelector(".product").innerHTML = ""
    var total = 0;

    cartData.map(function (elem, index) {

        var div1 = document.createElement("div")
        div1.setAttribute("id", "box1")

        var div11 = document.createElement("div")
        div11.setAttribute("id", "box11")

        var div12 = document.createElement("div")
        div12.setAttribute("id", "box12")

        var image = document.createElement("img")
        image.setAttribute("src", elem.img)
        image.setAttribute("id", "image")

        var nameDiv = document.createElement("div")
        nameDiv.setAttribute("id", "nameDiv")
        nameDiv.innerHTML = elem.name


        var proDiv1 = document.createElement("div")
        proDiv1.setAttribute("id", "proDiv1")

        var para3 = document.createElement("p")
        para3.innerText = "EU" + " " + elem.size


        var proDiv2 = document.createElement("div")
        proDiv2.setAttribute("id", "proDiv2")
        proDiv2.innerText = "Rs" + " " + elem.price

        var quant = document.createElement("div")
        quant.innerHTML = "Quantity : " 

        var proDiv3 = document.createElement("div")
        proDiv3.setAttribute("id", "proDiv3")

        var add = document.createElement("div")
        add.style.cursor = "pointer"
        add.setAttribute("id", "add")
        add.innerText = "ADD MORE"

        var dele = document.createElement("div")
        dele.setAttribute("id", "dele")
        dele.innerText = "Delete"


        total = total + elem.price

        document.querySelector("#prize").innerHTML = "Total price" + " ₹ " + total
        localStorage.setItem("totalPrice",JSON.stringify(total))

        add.addEventListener("click", function () {
            addMore(elem)
        })
        dele.addEventListener("click", function () {
            delet(index)
        })

        proDiv1.append(para3, quant)
        proDiv3.append(add, dele)
        div11.append(nameDiv, image)
        div12.append(proDiv1, proDiv2, proDiv3)
        div1.append(div11, div12)
        document.querySelector(".product").append(div1)

    })
    if (cartData.length == 0)
    {
        document.querySelector("#prize").innerHTML = "Total" + " " + "price" + " " + "=" + "Rs." + total
    }
}
function delet(index)
{
   cartData.splice(index,1)
   localStorage.setItem("cartData",JSON.stringify(cartData))
   all();
}
function addMore(elem)
{
   cartData.push(elem)
   localStorage.setItem("cartData",JSON.stringify(cartData))
   all();
}

document.querySelector("#continue").addEventListener("click",continu)
function continu()
{
    var loginData = JSON.parse(localStorage.getItem("loginData")) || []
    if (loginData.length != 0) {
        window.location.href = "/Pages/address&payment.html"
    }
    else {
        alert("Login to continue")
        window.location.href = "/Pages/login.html"
    }
}
