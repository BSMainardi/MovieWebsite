document.addEventListener('DOMContentLoaded', function () {
    // recalling the matchHeight function
    matchHeight('.movieCard');

    wishlist();
})

// adjusting the height of mocieCard
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

// swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 48,
    autoHeight: true,
    speed: 350,
    // allowSlideNext: false,
    // allowSlidePrev: false,
    // allowTouchMove: false,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // loop: true,
    mousewheel: true,
    keyboard: true,
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        480: {
            // slidesPerView: ,
        },
        960: {
            // slidesPerView: ,
        }
    }
});

function wishlist() {
    const movieBtn = document.querySelectorAll('.movieBtn');

    // movieBtn.addEventListener('click', function(){
    //     movieBtn[i].classList.toggle('is-active');
    // });

    for (let i = 0; i < movieBtn.length; i++) {
        // console.log(this.classList && this.classList.elements);
        movieBtn[i].addEventListener('click', function (e) {
            this.classList.toggle('is-active');            
        })
    }
}


