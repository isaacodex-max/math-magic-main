document.addEventListener("DOMContentLoaded", function () {
    // Initialize all features once DOM is fully loaded
    ShadowScroller();
    initializeSwiper();
});

document.addEventListener("DOMContentLoaded", function () {
    const shadowHeader = document.querySelector("header nav");

    if (shadowHeader) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 100) {
                shadowHeader.classList.add("float_head");
            } else {
                shadowHeader.classList.remove("float_head");
            }
        });

        // Initial check in case page is loaded scrolled
        if (window.scrollY > 150) {
            shadowHeader.classList.add("float_head");
        }
    } else {
        console.error("Header nav element not found");
    }
});



function toggleNavBar() {
    var bar = document.querySelector('.bar');
    var navBar = document.getElementById("navbar");

    if (bar && navBar) {
        bar.classList.toggle('roller');
        bar.classList.toggle('active');
        navBar.classList.toggle("navigation");
    } else {
        console.error("Bar or Navbar element not found");
    }
}

function opener() {
    var menu = document.getElementById("menu");
    var icon = document.querySelector(".bx-menu");

    if (menu && icon) {
        menu.classList.toggle("menu");
        icon.classList.toggle("bxs-x-square");
    } else {
        console.error("Menu or Icon element not found");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const cardSwiper1 = new Swiper('.card_swiper', {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            880: {
                slidesPerView: 3,
            },
            980: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },

        },
    });
});