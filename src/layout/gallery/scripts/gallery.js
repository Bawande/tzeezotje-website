const gallerySwiper = new Swiper('#id-gallery-swiper', {
  centeredSlides: true,
  slidesPerView: 1.3,
  loop: true,

  spaceBetween: 30,
  initialSlide: 1,

  // when window width is <= 499px
  breakpoints: {
    768: {
      slidesPerView: 1.7,
    },
  },

  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
});
