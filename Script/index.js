/*--------------------------Start The Ham Burger Menu Functionality --------------------*/

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".ham").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".ham").style.display = "block";
}

/*--------------------------Start Of The Slider Functionality --------------------*/

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelector("#logoimg").addEventListener("click", takeMeHome);
document.querySelector(".womenimg").addEventListener("click", takeMeToWomen);
document.querySelector(".menimg").addEventListener("click", takeMeToMen);

function takeMeHome() {
  window.location.href = "/index.html";
}

function takeMeToWomen() {
  window.location.href = "/Pages/women.html";
}

function takeMeToMen() {
  window.location.href = "/Pages/men.html";
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
