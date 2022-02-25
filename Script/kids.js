var kidsData = JSON.parse(localStorage.getItem("kidsData")) || []

// first function which map all elements into the first basic page: this function is called as "visible"
// Due to limited data we are using grid method to show them in a representable way.
visible()
function visible()
{
    localStorage.removeItem("filterData",)
    localStorage.removeItem("filterprice",)
    localStorage.removeItem("filterSize",)
    document.querySelector("#container").innerHTML = ""
    document.querySelector("#viewAll").style.fontWeight = "bold"
    kidsData.map(function (elem) {
    var box= document.createElement("div")
    var img = document.createElement("img")
    var name = document.createElement("p")
    var innerContainer = document.createElement("div")
    var price = document.createElement("p")
        img.addEventListener("click", function () {
        purchase(elem)
        });

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
// script for loading the purchase page after selecting any item
function purchase(elem)
{
    window.location.href = "/pages/purchase.html"
    localStorage.setItem("purchaseData", JSON.stringify(elem))
}
//functionality for the slider bar which provide filter for price
function sliderFunction(){
    var slider = document.getElementById("slider").value
    if (slider <= 999)
    {
        data = JSON.parse(localStorage.getItem("filterData")) || JSON.parse(localStorage.getItem("kidsData"))
        if (JSON.parse(localStorage.getItem("filterSize")) != null && JSON.parse(localStorage.getItem("filterSize")).length != 0) {
            data = JSON.parse(localStorage.getItem("filterSize"))
        }
        var filterValue = data.filter(function (elem) {
            if (elem.price < 999) {
                return elem
            }
        })
        localStorage.setItem("filterprice", JSON.stringify(filterValue))
        filterByPrice()
    }


    else if (slider > 999 && slider < 2500)
    {
    data = JSON.parse(localStorage.getItem("filterData")) || JSON.parse(localStorage.getItem("kidsData"))
    if (JSON.parse(localStorage.getItem("filterSize")) != null && JSON.parse(localStorage.getItem("filterSize")).length!= 0)
    {
        data = JSON.parse(localStorage.getItem("filterSize"))
        }
    var filterValue = data.filter(function (elem) {
        if (elem.price >= 1000 && elem.price<=2499) {
            return elem
        }
    })
    localStorage.setItem("filterprice", JSON.stringify(filterValue))
    filterByPrice()
    }

    else if (slider >= 2500 && slider < 4000)
    {
    data = JSON.parse(localStorage.getItem("filterData")) || JSON.parse(localStorage.getItem("kidsData"))
    if (JSON.parse(localStorage.getItem("filterSize")) != null && JSON.parse(localStorage.getItem("filterSize")).length!= 0)
    {
        data = JSON.parse(localStorage.getItem("filterSize"))
        }
    var filterValue = data.filter(function (elem) {
        if (elem.price >= 2500 && elem.price<=3999) {
            return elem
        }
    })
    localStorage.setItem("filterprice", JSON.stringify(filterValue))
    filterByPrice()
    }

    else if (slider >= 4000)
    {
    data = JSON.parse(localStorage.getItem("filterData")) || JSON.parse(localStorage.getItem("kidsData"))
    if (JSON.parse(localStorage.getItem("filterSize")) != null && JSON.parse(localStorage.getItem("filterSize")).length!= 0)
    {
        data = JSON.parse(localStorage.getItem("filterSize"))
        }
    var filterValue = data.filter(function (elem) {
        if (elem.price >= 4000) {
            return elem
        }
    })
    localStorage.setItem("filterprice", JSON.stringify(filterValue))
    filterByPrice()
    }
}

//filter function for type of product

function filterByType() {
    localStorage.removeItem("filterprice",)
    localStorage.removeItem("filterSize",)
    var filterValue= JSON.parse(localStorage.getItem("filterData"))
    document.querySelector("#container").innerHTML = ""
    filterValue.map(function (elem) {
        var box = document.createElement("div")
        var img = document.createElement("img")
        var name = document.createElement("p")
        var innerContainer = document.createElement("div")
        var price = document.createElement("p")
        img.addEventListener("click", function () {
            purchase(elem)
        });
        
        img.src = elem.img
        name.innerText = elem.name
        price.innerText = "₹" + elem.price
        innerContainer.style.fontFamily = "sans-serif"
        innerContainer.style.fontSize = "12px"
        innerContainer.style.color = "rgb(97, 94, 94)"
        innerContainer.append(name, price)
        innerContainer.style.display = "flex"
        innerContainer.style.justifyContent = "space-between"

        box.append(img, innerContainer)
        document.querySelector("#container").append(box)

    document.querySelector("#large").style.backgroundColor = "white"
    document.querySelector("#medium").style.backgroundColor = "white"
    document.querySelector("#small").style.backgroundColor = "white"
    document.querySelector("#lowPrice").style.backgroundColor = "white"
    document.querySelector("#mediumPrice").style.backgroundColor = "white"
    document.querySelector("#highPrice").style.backgroundColor = "white"
    document.querySelector("#veryHighPrice").style.backgroundColor = "white"
    document.querySelector("#slider").value = 1
    })
}
//filter function for size of product

function filterBySize() {
    var filterValue= JSON.parse(localStorage.getItem("filterSize"))
    document.querySelector("#container").innerHTML = ""
    filterValue.map(function (elem) {
        var box = document.createElement("div")
        var img = document.createElement("img")
        var name = document.createElement("p")
        var innerContainer = document.createElement("div")
        var price = document.createElement("p")
        img.addEventListener("click", function () {
            purchase(elem)
        });
        img.src = elem.img
        name.innerText = elem.name
        price.innerText = "₹" + elem.price
        innerContainer.style.fontFamily = "sans-serif"
        innerContainer.style.fontSize = "12px"
        innerContainer.style.color = "rgb(97, 94, 94)"
        innerContainer.append(name, price)
        innerContainer.style.display = "flex"
        innerContainer.style.justifyContent = "space-between"

        box.append(img, innerContainer)
        document.querySelector("#container").append(box)
    })
}

//filter function for price of product

function filterByPrice() {
    var filterValue= JSON.parse(localStorage.getItem("filterprice"))
    document.querySelector("#container").innerHTML = ""
    filterValue.map(function (elem) {
        var box = document.createElement("div")
        var img = document.createElement("img")
        var name = document.createElement("p")
        var innerContainer = document.createElement("div")
        var price = document.createElement("p")
        img.addEventListener("click", function () {
            purchase(elem)
        });
        img.src = elem.img
        name.innerText = elem.name
        price.innerText = "₹" + elem.price
        innerContainer.style.fontFamily = "sans-serif"
        innerContainer.style.fontSize = "12px"
        innerContainer.style.color = "rgb(97, 94, 94)"
        innerContainer.append(name, price)
        innerContainer.style.display = "flex"
        innerContainer.style.justifyContent = "space-between"

        box.append(img, innerContainer)
        document.querySelector("#container").append(box)
    })
}

// Types like: view items for boys and girls;
// we are using a filter here to filter out the type of product choosen and show them to the user

document.querySelector("#viewAll").addEventListener("click", function () {
    document.querySelector("#viewAll").style.fontWeight = "bold"
    document.querySelector("#boy").style.fontWeight = "lighter"
    document.querySelector("#girl").style.fontWeight = "lighter"
    var filterValue = JSON.parse(localStorage.getItem("kidsData"))
    localStorage.setItem("filterData", JSON.stringify(filterValue))
    filterByType()
})
document.querySelector("#boy").addEventListener("click", function () {
    document.querySelector("#boy").style.fontWeight = "bold"
    document.querySelector("#viewAll").style.fontWeight = "lighter"
    document.querySelector("#girl").style.fontWeight = "lighter"
    var filterValue = kidsData.filter(function (elem) {
        if (elem.type2 == "boy") {
            return elem
        }
    })
    localStorage.setItem("filterData", JSON.stringify(filterValue))
    filterByType()
})

document.querySelector("#girl").addEventListener("click", function () {
    document.querySelector("#boy").style.fontWeight = "lighter"
    document.querySelector("#viewAll").style.fontWeight = "lighter"
    document.querySelector("#girl").style.fontWeight = "bold"
    var filterValue = kidsData.filter(function (elem) {
        if (elem.type2 == "girls") {
            return elem
        }
    })
    localStorage.setItem("filterData", JSON.stringify(filterValue))
    filterByType()
})
// Size like: large, medium and small:
// we are using a filter here to filter out the size of product choosen and show them to the user

document.querySelector("#large").addEventListener("click", function () {
    document.querySelector("#large").style.backgroundColor = "#d6d6d6"
    document.querySelector("#medium").style.backgroundColor = "white"
    document.querySelector("#small").style.backgroundColor = "white"
    data = JSON.parse(localStorage.getItem("filterData")) || JSON.parse(localStorage.getItem("kidsData"))
    if (JSON.parse(localStorage.getItem("filterprice")) != null && JSON.parse(localStorage.getItem("filterprice")).length != 0)
        {
        data = JSON.parse(localStorage.getItem("filterprice"))
        }
    var filterValue = data.filter(function (elem) {
        if (elem.size == "L") {
            return elem
        }
    })
    localStorage.setItem("filterSize", JSON.stringify(filterValue))
    filterBySize()
    
})

document.querySelector("#medium").addEventListener("click", function () {
    document.querySelector("#large").style.backgroundColor = "white"
    document.querySelector("#medium").style.backgroundColor = "#d6d6d6"
    document.querySelector("#small").style.backgroundColor = "white"
    data = JSON.parse(localStorage.getItem("filterData")) || JSON.parse(localStorage.getItem("kidsData"))
    if (JSON.parse(localStorage.getItem("filterprice")) != null && JSON.parse(localStorage.getItem("filterprice")).length!= 0)
    {
        data = JSON.parse(localStorage.getItem("filterprice"))
        }
    var filterValue = data.filter(function (elem) {
        if (elem.size == "M") {
            return elem
        }
    })
    localStorage.setItem("filterSize", JSON.stringify(filterValue))
    filterBySize()
})

document.querySelector("#small").addEventListener("click", function () {
    document.querySelector("#large").style.backgroundColor = "white"
    document.querySelector("#medium").style.backgroundColor = "white"
    document.querySelector("#small").style.backgroundColor = "#d6d6d6"
    data = JSON.parse(localStorage.getItem("filterData")) || JSON.parse(localStorage.getItem("kidsData"))
    console.log(JSON.parse(localStorage.getItem("filterprice")));
    if (JSON.parse(localStorage.getItem("filterprice")) != null && JSON.parse(localStorage.getItem("filterprice")).length!= 0)
    {
        data = JSON.parse(localStorage.getItem("filterprice"))
        }
    var filterValue = data.filter(function (elem) {
        if (elem.size == "S") {
            return elem
        }
    })
    localStorage.setItem("filterSize", JSON.stringify(filterValue))
    filterBySize()
})

// Price like: low, medium, high etc:
// we are using a filter here to filter out the price of product choosen and show them to the user

document.querySelector("#lowPrice").addEventListener("click", function () {
        document.querySelector("#lowPrice").style.backgroundColor = "#d6d6d6"
        document.querySelector("#mediumPrice").style.backgroundColor = "white"
        document.querySelector("#highPrice").style.backgroundColor = "white"
        document.querySelector("#veryHighPrice").style.backgroundColor = "white"
        data = JSON.parse(localStorage.getItem("filterData")) || JSON.parse(localStorage.getItem("kidsData"))
        if (JSON.parse(localStorage.getItem("filterSize")) != null && JSON.parse(localStorage.getItem("filterSize")).length != 0) {
            data = JSON.parse(localStorage.getItem("filterSize"))
        }
        var filterValue = data.filter(function (elem) {
            if (elem.price < 999) {
                return elem
            }
        })
        localStorage.setItem("filterprice", JSON.stringify(filterValue))
        filterByPrice()
})

document.querySelector("#mediumPrice").addEventListener("click", function () {
    document.querySelector("#lowPrice").style.backgroundColor = "white"
    document.querySelector("#mediumPrice").style.backgroundColor = "#d6d6d6"
    document.querySelector("#highPrice").style.backgroundColor = "white"
    document.querySelector("#veryHighPrice").style.backgroundColor = "white"
    data = JSON.parse(localStorage.getItem("filterData")) || JSON.parse(localStorage.getItem("kidsData"))
    if (JSON.parse(localStorage.getItem("filterSize")) != null && JSON.parse(localStorage.getItem("filterSize")).length!= 0)
    {
        data = JSON.parse(localStorage.getItem("filterSize"))
        }
    var filterValue = data.filter(function (elem) {
        if (elem.price >= 1000 && elem.price<=2499) {
            return elem
        }
    })
    localStorage.setItem("filterprice", JSON.stringify(filterValue))
    filterByPrice()
})

document.querySelector("#highPrice").addEventListener("click", function () {
    document.querySelector("#lowPrice").style.backgroundColor = "white"
    document.querySelector("#mediumPrice").style.backgroundColor = "white"
    document.querySelector("#highPrice").style.backgroundColor = "#d6d6d6"
    document.querySelector("#veryHighPrice").style.backgroundColor = "white"
    data = JSON.parse(localStorage.getItem("filterData")) || JSON.parse(localStorage.getItem("kidsData"))
    if (JSON.parse(localStorage.getItem("filterSize")) != null && JSON.parse(localStorage.getItem("filterSize")).length!= 0)
    {
        data = JSON.parse(localStorage.getItem("filterSize"))
        }
    var filterValue = data.filter(function (elem) {
        if (elem.price >= 2500 && elem.price<=3999) {
            return elem
        }
    })
    localStorage.setItem("filterprice", JSON.stringify(filterValue))
    filterByPrice()
})

document.querySelector("#veryHighPrice").addEventListener("click", function () {
    document.querySelector("#lowPrice").style.backgroundColor = "white"
    document.querySelector("#mediumPrice").style.backgroundColor = "white"
    document.querySelector("#highPrice").style.backgroundColor = "white"
    document.querySelector("#veryHighPrice").style.backgroundColor = "#d6d6d6"
    data = JSON.parse(localStorage.getItem("filterData")) || JSON.parse(localStorage.getItem("kidsData"))
    if (JSON.parse(localStorage.getItem("filterSize")) != null && JSON.parse(localStorage.getItem("filterSize")).length!= 0)
    {
        data = JSON.parse(localStorage.getItem("filterSize"))
        }
    var filterValue = data.filter(function (elem) {
        if (elem.price >= 4000) {
            return elem
        }
    })
    localStorage.setItem("filterprice", JSON.stringify(filterValue))
    filterByPrice()
})