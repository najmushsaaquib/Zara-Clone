var swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,

  },

  speed: 790,
  direction: "vertical",
  sliderPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
 
});

/*--------------------------Swiper Horizontal Functionality--------------------*/


if (window.innerWidth > 393){

  const swipe = new Swiper(".swiper", {
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
      
    },
    speed: 1000,
  });
}
  
/*--------------------------Start The Ham Burger Menu Functionality --------------------*/

function openNav() {
  if (window.innerWidth < 393) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
  }
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

let loginData = JSON.parse(localStorage.getItem("loginData")) || [];
var login = document.querySelector("#login");
// login.innerText = JSON.parse(localStorage.getItem("loginData")) || "Login"

if (loginData.length != 0) {
  login.innerHTML = loginData[0].name;
} else {
  login.innerText = "Login";
}


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
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
