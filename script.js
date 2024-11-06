/*LOGO SLIDER FUNCTIONALITY*/

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const menuLinks = menu.querySelectorAll("a");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("show");


        hamburger.classList.toggle("active");
    });

    // Close the menu when any link is clicked
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            menu.classList.remove("show");  // Close the menu
            hamburger.classList.remove("active");  // Remove the active state from the hamburger
        });
    });

});


// Logo slider functionality
const sliderItems = document.querySelector(".slider-items");
let scrollAmount = 0;
const scrollStep = 0.5; // Adjust speed here

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

// Obtener el botón
const backToTopBtn = document.getElementById('backToTopBtn');

// Mostrar el botón al desplazarse más de 100px
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
};

// Desplazarse hacia arriba al hacer clic en el botón
backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});