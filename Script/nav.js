/*--------------------------Start The Ham Burger Menu Functionality --------------------*/

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".ham").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".ham").style.display = "inline";
}

/*--------------------------End Of The Ham Burger Menu Functionality --------------------*/

document.querySelector("#logoimg").addEventListener("click", takeMe);
function takeMe() {
  window.location.href = "/index.html";
}


let loginData = [];

let obj = {
  name: "Najmush Saaquib",
  email: "najmush@gmail.com",
  password: "password",
};

// loginData.push(obj)
// console.log(loginData[0].name)

localStorage.setItem("loginData", JSON.stringify(loginData));

var login = document.querySelector("#login");
// login.innerText = JSON.parse(localStorage.getItem("loginData")) || "Login"

if (loginData[0] != undefined) {
  login.innerText = loginData[0].name;
} else {
  login.innerText = "Login";
}

console.log(login);

//   <script>
//     var login = document.querySelector("#login");
//     login.innerText = JSON.parse(localStorage.getItem("arunData")) || "Login"
// </script>



/*-------------------------- Chat functionality Codes --------------------*/


function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.querySelector("open-button").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

/*-------------------------- Help Modal Thing --------------------*/


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}