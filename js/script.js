"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var scrollTopBtn = document.getElementById("scrollTop");
    var menuToggle = document.getElementById("menu-toggle");
    var asideMenu = document.getElementById("aside-menu");

    // Zobrazí/skrývá tlačítko podle pozice na stránce
    if (scrollTopBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = "flex";
            } else {
                scrollTopBtn.style.display = "none";
            }
        });

        // Kliknutí na šipku posune stránku nahoru
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ behavior: "smooth", top: 0 });
        });
    }

    // Smooth scrolling pro menu odkazy
    var menuLinks = document.querySelectorAll("ul.nav-links a");
    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", function (e) {
            e.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "start" 
                });
            }
        });
    }

    // Toggle menu button s přepínáním ikonky
    if (menuToggle && asideMenu) {
        menuToggle.addEventListener("click", function () {
            asideMenu.classList.toggle("active");

            // Změní ikonku tlačítka podle stavu menu
            if (asideMenu.classList.contains("active")) {
                menuToggle.innerHTML = "✖"; // Křížek
            } else {
                menuToggle.innerHTML = "☰"; // Hamburger
            }
        });
    }

    document.addEventListener("click", function (event) {
        var clickOutsideMenu = 
            !asideMenu.contains(event.target) && 
            !menuToggle.contains(event.target);

        if (clickOutsideMenu) {
            asideMenu.classList.remove("active");
            menuToggle.innerHTML = "☰"; // Vrátí hamburger ikonku
        }
    });
});
