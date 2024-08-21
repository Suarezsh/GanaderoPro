document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle-btn");
    const menu = document.getElementById("main-menu");
    const barsIcon = document.getElementById("menu-bars-icon");
    const timesIcon = document.getElementById("menu-times-icon");
    const overlay = document.getElementById("overlay");
    const content = document.querySelector(".content");

    function toggleMenu() {
        menu.classList.toggle("show");
        overlay.classList.toggle("show");
        content.classList.toggle("dimmed");
        menuToggle.classList.toggle("open");
        barsIcon.style.display = barsIcon.style.display === "none" ? "block" : "none";
        timesIcon.style.display = timesIcon.style.display === "none" ? "block" : "none";
    }

    menuToggle.addEventListener("click", function() {
        toggleMenu();
    });

    overlay.addEventListener("click", function() {
        if (menu.classList.contains("show")) {
            toggleMenu();
        }
    });

    content.addEventListener("click", function() {
        if (menu.classList.contains("show")) {
            toggleMenu();
        }
    });

    window.addEventListener("scroll", function() {
        if (menu.classList.contains("show")) {
            toggleMenu();
        }
    });
});
