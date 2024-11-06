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

    // Close the menu if it's open when clicking outside (optional)
    window.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove("show");
            hamburger.classList.remove("active");
        }
    });
});
