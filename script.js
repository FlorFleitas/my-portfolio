// Toggle mobile menu functionality
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
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
