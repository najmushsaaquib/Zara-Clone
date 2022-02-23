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
