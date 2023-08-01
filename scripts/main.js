document.addEventListener('DOMContentLoaded', function () {

    function matchHeight(elements) {
        const target = Array.from(document.querySelectorAll(elements));
        const heightList = [];
        target.forEach(element => {
            const height = element.clientHeight;
            heightList.push(height);
        });

        const maxHeight = Math.max.apply(null, heightList);
        target.forEach(element => {
            element.style.height = maxHeight + 'px';
        });
    }

    matchHeight('.movieCard');
})

// swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    autoHeight: true,
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
            // slidesPerView: ,
        },
        960: {
            // slidesPerView: ,
        }
    }
});


