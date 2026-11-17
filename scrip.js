
const sidebar = document.getElementById("sidebar");
const mainContent = document.querySelector(".main-content");

const collapseBtn = document.getElementById("collapseBtn");
const mobileMenu = document.getElementById("mobileMenu");
const themeBtn = document.getElementById("themeBtn");
const pageTitle = document.getElementById("pageTitle");

// Collapse sidebar on desktop
collapseBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("expanded");
});

// Open sidebar on mobile
mobileMenu.addEventListener("click", () => {
    sidebar.classList.toggle("mobile-open");
});

// Switch dark and light themes
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeBtn.querySelector(".nav-text").textContent =
        isDark ? "Switch to Light" : "Switch Theme";
});

// Navigation active links
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {

        if (link.classList.contains("logout")) {
            event.preventDefault();
            alert("You have clicked Logout!");
            return;
        }

        event.preventDefault();

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        const title = link.querySelector(".nav-text");

        if (title) {
            pageTitle.textContent = title.textContent;
        }

        // Close mobile sidebar after navigation
        sidebar.classList.remove("mobile-open");
    });
});
