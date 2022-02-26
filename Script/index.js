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


if (window.innerWidth > 415){

  const swipe = new Swiper(".swiper", {
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
      
    },
    speed: 1000,
  });
}
 