import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

export const swiper = new Swiper('.manufacturer__slider', {
    navigation: {                       
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    loop: true,
    rewind: true,            
    slidesPerView: 1,             
    breakpoints: {
      1300: {
        slidesPerView: 5,
    },                      
        1250: {
            slidesPerView: 4,

        },
        750: {
          slidesPerView: 3,
      }
    }
  });