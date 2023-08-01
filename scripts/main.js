const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    speed: 600,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    mousewheel: true,
    keyboard: true,
    autoplay: true,
    spaceBetween: 48,
    breakpoints: {
        480: {
            // slidesPerView: 4.5,
        },
        960: {
            // slidesPerView: 5.5,
        }
    }
});