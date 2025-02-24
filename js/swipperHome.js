var swiper = new Swiper(".swipperHome", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  slideOffsetBefore: 50,
  slideOffsetAfter: 50,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swipperHome-button-next",
      prevEl: ".swipperHome-button-prev",
      hideOnClick: false,
  },
});