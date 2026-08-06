// Vite entrypoint for the portfolio.
console.log("Portfolio running with Vite");

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("menu-icon-open");
const iconClose = document.getElementById("menu-icon-close");

function setMenuState(isOpen) {
    mobileMenu.classList.toggle("hidden", !isOpen);
    mobileMenu.classList.toggle("flex", isOpen);
    iconOpen.classList.toggle("hidden", isOpen);
    iconClose.classList.toggle("hidden", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menu" : "Abrir menu");
}

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        setMenuState(!isOpen);
    });

    // Close the menu after tapping any link inside it.
    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });

    // Close the menu automatically when resizing up to desktop width.
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            setMenuState(false);
        }
    });
}

// Keep the footer's copyright year current without editing it by hand.
const currentYear = document.getElementById("current-year");
if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}
