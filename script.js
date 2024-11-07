// Hamburguer menu functionality

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const menuLinks = menu.querySelectorAll("a");
    const body = document.body; 

    function toggleScroll() {
        body.classList.toggle('no-scroll');
    }

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("show");
        hamburger.classList.toggle("active");

        toggleScroll();
    });

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            menu.classList.remove("show");
            hamburger.classList.remove("active");

            body.classList.remove('no-scroll');
        });
    });
});



// Logo slider functionality
const sliderItems = document.querySelector(".slider-items");
let scrollAmount = 0;
const scrollStep = 0.5;

function startSlider() {
    const interval = setInterval(() => {
        scrollAmount += scrollStep;
        sliderItems.style.transform = `translateX(-${scrollAmount}px)`;

        if (scrollAmount >= sliderItems.scrollWidth / 5) {
            scrollAmount = 0;
            sliderItems.style.transform = "translateX(0)";
        }
    }, 16);
}

document.addEventListener("DOMContentLoaded", startSlider);

/* BACK TO TOP BUTTON */
const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
};
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* SCROLL DOWN ARROW - HOME */
document.querySelector('.scroll-link').addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
});


/* HEADER LOGO AND DECORATION LINE ON SCROLL */
const logo = document.getElementById('logo');
const menuContainer = document.querySelector('.menu-container');
const homeSection = document.getElementById('home');
const homeHeight = homeSection.offsetHeight;

let lastScrollTop = 0; 

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        menuContainer.classList.add('hidden');
        logo.classList.add('hide');
        logo.classList.remove('show');
    } else {
        menuContainer.classList.remove('hidden');
        logo.classList.remove('hide');
        logo.classList.add('show');
    }

    if (currentScroll > homeHeight / 2) {
        menuContainer.classList.add('hide'); 
        logo.classList.add('hide'); 
    } else {
        menuContainer.classList.remove('hide'); 
        if (!menuContainer.classList.contains('hide')) {
            logo.classList.remove('show'); 
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
