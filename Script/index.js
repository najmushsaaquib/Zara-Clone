/*--------------------------Start The Ham Burger Menu Functionality --------------------*/

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".ham").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".ham").style.display = "inline";
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
