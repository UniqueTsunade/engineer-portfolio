// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


export function slider() {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        centeredSlides: true,
        parallax: true,
        speed: 600,
        slidesPerView: 1, 
        breakpoints: {
            1100: {
                slidesPerView: 3,
            },
        },
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}