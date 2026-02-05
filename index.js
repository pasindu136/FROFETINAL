
const menuIcon = document.querySelector(".menu-icon");
const pageLink = document.querySelector(".pageLink");

if (menuIcon && pageLink) {
    menuIcon.addEventListener("click", () => {
        pageLink.classList.toggle("active");
    });
}

// Category Slider
document.addEventListener("DOMContentLoaded", () => {
    const categories = [
        { name: "Abaya", img: "./assets/Categories/Abaya.jpg" },
        { name: "Coats", img: "./assets/Categories/Coats1.jpg" },
        { name: "Dresses", img: "./assets/Categories/Dresses.jpg" },
        { name: "Footwear", img: "./assets/Categories/Footwear1.jpg" },
        { name: "Kaftan", img: "./assets/Categories/Kaftan.jpg" },
        { name: "Kids", img: "./assets/Categories/Kids.jpg" },
        { name: "Loungewear", img: "./assets/Categories/Loungewear.jpg" },
        { name: "Men", img: "./assets/Categories/Men.jpg" },
        { name: "Denim", img: "./assets/Categories/Pants.jpg" },
        { name: "Scarves", img: "./assets/Categories/Scarves.jpg" },
        { name: "Shirts", img: "./assets/Categories/Shirts.jpg" },
        { name: "Sportswear", img: "./assets/Categories/Sportswear.jpg" },
        { name: "Women", img: "./assets/Categories/Women.jpg" }
    ];

    const container = document.getElementById("categoryCard");
    if (!container) return; // Guard clause

    function createCard(cat) {
        const div = document.createElement("div");
        div.innerHTML = `
            <img src="${cat.img}" alt="${cat.name}">
            <p>${cat.name}</p>
        `;
        return div;
    }

    // Load Cards
    categories.forEach(cat => container.appendChild(createCard(cat)));
    // Clone for infinite loop
    categories.slice(0, 4).forEach(cat => container.appendChild(createCard(cat)));

    // Auto Scroll Logic
    const scrollStep = 220;
    const scrollInterval = 3000;
    let interval;

    function slideRight() {
        container.scrollBy({ left: scrollStep, behavior: "smooth" });
    }

    function startAutoScroll() {
        interval = setInterval(slideRight, scrollInterval);
    }

    function stopAutoScroll() {
        clearInterval(interval);
    }

    container.addEventListener("scroll", () => {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - scrollStep) {
            setTimeout(() => {
                container.scrollLeft = 0;
            }, 400);
        }
    });

    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);
    container.addEventListener("touchstart", stopAutoScroll);
    container.addEventListener("touchend", startAutoScroll);

    startAutoScroll();
});

// New Arrivals Slider
document.addEventListener("DOMContentLoaded", () => {
    // Safety check for global data
    if (!window.products) {
        console.error("Products not loaded in index.js");
        return;
    }

    const products = window.products;
    const newArrivals = products.slice(0, 8); // Display first 8 items

    const slider = document.getElementById("productSlider");
    const left = document.querySelector(".newArrivals .left");
    const right = document.querySelector(".newArrivals .right");

    if (!slider) return;

    // Create Card Function
    function createCard(p, originalIndex) {
        const div = document.createElement("div");
        div.className = "productCard";

        // Fix path: data.js has "../assets", index.html needs "./assets"
        const imagePath = p.image ? p.image.replace("../assets", "./assets") : "";

        div.innerHTML = `
            <img src="${imagePath}" loading="lazy" class="fade-in-img">
            <h4>${p.name}</h4>
            <span>${(p.category && p.category[0]) || 'Gen'}</span>
            <strong>Rs. ${p.price}</strong>
        `;

        div.style.cursor = "pointer";
        div.addEventListener("click", () => {
            window.location.href = `./pages/product-view.html?id=${originalIndex}`;
        });

        return div;
    }

    // Populate Slider
    newArrivals.forEach(p => {
        const originalIndex = products.indexOf(p);
        slider.appendChild(createCard(p, originalIndex));
    });

    // Clone for infinite effect
    newArrivals.slice(0, 4).forEach(p => {
        const originalIndex = products.indexOf(p);
        slider.appendChild(createCard(p, originalIndex));
    });

    const step = 220;
    const intervalTime = 3000;
    let interval;

    function slideRight() {
        slider.scrollBy({ left: step, behavior: "smooth" });
    }

    function slideLeft() {
        slider.scrollBy({ left: -step, behavior: "smooth" });
    }

    function start() {
        interval = setInterval(slideRight, intervalTime);
    }

    function stop() {
        clearInterval(interval);
    }

    // Infinite Scroll Reset
    slider.addEventListener("scroll", () => {
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - step) {
            setTimeout(() => {
                slider.scrollLeft = 0;
            }, 400);
        }
    });

    // Arrow Listeners
    if (right) right.addEventListener("click", () => { stop(); slideRight(); start(); });
    if (left) left.addEventListener("click", () => { stop(); slideLeft(); start(); });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);

    start();
});

// UI Interactions (User Icon, Cart)
// Note: Cart opening is also handled by cart.js, but we'll keep the user icon logic here.
document.addEventListener("DOMContentLoaded", () => {
    const userIcon = document.querySelector(".fa-user");
    const accountPanel = document.querySelector(".account-panel");
    const accountOverlay = document.querySelector(".account-overlay");
    const closeAccount = document.querySelector(".close-account");

    if (userIcon) {
        userIcon.addEventListener("click", () => {
            window.location.href = "./pages/login.html";
        });
    }

    function closePanel() {
        if (accountPanel) accountPanel.classList.remove("active");
        if (accountOverlay) accountOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (closeAccount) closeAccount.addEventListener("click", closePanel);
    if (accountOverlay) accountOverlay.addEventListener("click", closePanel);
});
