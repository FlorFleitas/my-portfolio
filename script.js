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
document.querySelector('.scroll-link').addEventListener('click', function(e) {
    e.preventDefault();  
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });