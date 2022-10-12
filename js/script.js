function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
const header = document.querySelector('.header');
const open_modal_tablet = document.querySelector('.header__nav-tablet');
const open_modal_mobile = document.querySelector('.header__nav-mobile');
const header_modal = document.getElementById('header__modal');
open_modal_tablet.addEventListener('click', openModal);
open_modal_mobile.addEventListener('click', openModal);

function openModal() {
    header_modal.classList.toggle('active');
    header.classList.toggle('header__white');
}

var swiper2 = new Swiper(".newsSwiper", {
    loop: true,
    spaceBetween: 48,
    breakpoints: {
        1700: {
            slidesPerView: 4.5,
        },
        1500: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 3.533
        },
        1200: {
            slidesPerView: 3
        },
        1000: {
            slidesPerView: 2.717,
            spaceBetween: 40,
        },
        800: {
            slidesPerView: 1.98,
        },
        550: {
            slidesPerView: 1.72,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1.193,
            spaceBetween: 26,
        }
    },

});

var swiper1 = new Swiper(".companyPhilosophySwiper", {
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 12,

});

var swiper = new Swiper(".frontSwiper", {
    breakpoints: {
        0: {
            slidesPerView: 1.185,
            spaceBetween: 0,
        },
        550: {
            slidesPerView: 1.174,
            spaceBetween: 0,
        },
        1000: {
            slidesPerView: 1.187,
            spaceBetween: 0,
        },
        1300: {
            slidesPerView: 1.174,
            spaceBetween: 0,
        }
    },
});