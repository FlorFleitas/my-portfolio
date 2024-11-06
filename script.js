// Toggle mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    // Function to toggle the "show" class on the menu when the hamburger is clicked
    hamburger.addEventListener("click", function () {

        menu.classList.toggle("show");

        // Toggle the "active" class on the hamburger for animation
        hamburger.classList.toggle("active");


        window.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove("show");
                hamburger.classList.remove("active");
            }
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

        if (scrollAmount >= sliderItems.scrollWidth / 2) {
            scrollAmount = 0;
            sliderItems.style.transform = "translateX(0)";
        }
    }, 16);
}

document.addEventListener("DOMContentLoaded", startSlider);
