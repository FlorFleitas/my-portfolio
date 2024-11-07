/*LOGO SLIDER FUNCTIONALITY*/

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const menuLinks = menu.querySelectorAll("a");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("show");


        hamburger.classList.toggle("active");
    });

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            menu.classList.remove("show");
            hamburger.classList.remove("active");
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

let lastScrollTop = 0; // Store the last scroll position

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    // If scrolling down, hide the header
    if (currentScroll > lastScrollTop) {
        menuContainer.classList.add('hidden');
        logo.classList.remove('show'); // Optionally hide the logo when scrolling down
    } else {
        // If scrolling up, show the header
        menuContainer.classList.remove('hidden');
        if (currentScroll > homeHeight / 2) {
            logo.classList.add('show');
        }
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

/* HEADER LOGO AND DECORATION LINE ON SCROLL (Previous Behavior) */
window.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        logo.classList.add('show');
        menuContainer.classList.add('hide');
    } else {
        logo.classList.remove('show');
        menuContainer.classList.remove('hide');
    }
});
