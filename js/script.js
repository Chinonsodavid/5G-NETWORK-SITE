var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 20,
    sliderPerGroup: 1,
    loop:  true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1,
      },
      760: {
        slidesPerView: 1,
      },
      1000: {
        slidesPerView: 1,
      },

    },    
  });