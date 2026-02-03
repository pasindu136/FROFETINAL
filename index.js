const menuIcon = document.querySelector(".menu-icon");
const pageLink = document.querySelector(".pageLink");

menuIcon.addEventListener("click", () => {
    pageLink.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", () => {

    const categories = [
        {name: "Abaya", img: "./assets/Categories/Abaya.jpg"},
        {name: "Coats", img: "./assets/Categories/Coats1.jpg"},
        {name: "Dresses", img: "./assets/Categories/Dresses.jpg"},
        {name: "Footwear", img: "./assets/Categories/Footwear1.jpg"},
        {name: "Kaftan", img: "./assets/Categories/Kaftan.jpg"},
        {name: "Kids", img: "./assets/Categories/Kids.jpg"},
        {name: "Loungewear", img:"./assets/Categories/Loungewear.jpg"},
        {name: "Men", img: "./assets/Categories/Men.jpg"},
        {name: "Denim", img: "./assets/Categories/Pants.jpg"},
        {name: "Scarves", img: "./assets/Categories/Scarves.jpg"},
        {name: "Shirts", img: "./assets/Categories/Shirts.jpg"},
        {name: "Sportswear", img: "./assets/Categories/Sportswear.jpg"},
        {name: "Women", img: "./assets/Categories/Women.jpg"}
    ];

    const container = document.getElementById("categoryCard");

    const scrollStep = 220;
    const scrollInterval = 3000;

    let interval;

    /* =====================
       CREATE CARDS
    ===================== */

    function createCard(cat){
        const div = document.createElement("div");
        div.innerHTML = `
            <img src="${cat.img}" alt="${cat.name}">
            <p>${cat.name}</p>
        `;
        return div;
    }

    // original cards
    categories.forEach(cat => {
        container.appendChild(createCard(cat));
    });

    // 🔥 CLONE FIRST FEW (for infinite effect)
    categories.slice(0, 4).forEach(cat => {
        container.appendChild(createCard(cat));
    });

    /* =====================
       AUTO SCROLL
    ===================== */

    function slideRight() {
        container.scrollBy({ left: scrollStep, behavior: "smooth" });
    }

    function startAutoScroll() {
        interval = setInterval(slideRight, scrollInterval);
    }

    function stopAutoScroll() {
        clearInterval(interval);
    }

    /* =====================
       RESET WITHOUT JUMP
    ===================== */

    container.addEventListener("scroll", () => {

        // if reached cloned area → instantly reset
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - scrollStep) {
            setTimeout(() => {
                container.scrollLeft = 0; // no animation
            }, 400);
        }
    });

    /* =====================
       USER FRIENDLY EVENTS
    ===================== */

    // pause on hover
    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);

    // mobile pause
    container.addEventListener("touchstart", stopAutoScroll);
    container.addEventListener("touchend", startAutoScroll);

    startAutoScroll();
});




document.addEventListener("DOMContentLoaded", () => {

    const products = [
        {img:"./assets/product/belt (1).png", name:"Classic Belt", color:"Black", price:"Rs 2,500"},
        {img:"./assets/product/belt (2).png", name:"Leather Belt", color:"Brown", price:"Rs 3,000"},
        {img:"./assets/product/belt (3).png", name:"Premium Belt", color:"Tan", price:"Rs 3,500"},
        {img:"./assets/product/belt (4).png", name:"Office Belt", color:"Dark Brown", price:"Rs 2,800"},
        {img:"./assets/product/belt (5).png", name:"Modern Belt", color:"Black", price:"Rs 3,200"},
        {img:"./assets/product/belt (10).png", name:"Slim Belt", color:"Gray", price:"Rs 2,900"},
        {img:"./assets/product/shirt ofice.png", name:"Slim Belt", color:"Gray", price:"Rs 2,900"},
        {img:"./assets/product/belt (13).png", name:"Slim Belt", color:"Gray", price:"Rs 2,900"},
        {img:"./assets/product/belt (14).png", name:"Slim Belt", color:"Gray", price:"Rs 2,900"},
        {img:"./assets/product/blue tshirt.png", name:"Slim Belt", color:"Gray", price:"Rs 2,900"},
        {img:"./assets/product/weding frock.png", name:"Slim Belt", color:"Gray", price:"Rs 2,900"}
    ];

    const slider = document.getElementById("productSlider");
    const left = document.querySelector(".newArrivals .left");
    const right = document.querySelector(".newArrivals .right");

    const step = 220;
    const intervalTime = 3000;
    let interval;

    /* create card */
    function createCard(p){
        const div = document.createElement("div");
        div.className = "productCard";

        div.innerHTML = `
            <img src="${p.img}">
            <h4>${p.name}</h4>
            <span>${p.color}</span>
            <strong>${p.price}</strong>
        `;
        return div;
    }

    /* original */
    products.forEach(p => slider.appendChild(createCard(p)));

    /* clone for infinite */
    products.slice(0,4).forEach(p => slider.appendChild(createCard(p)));

    /* slide */
    function slideRight(){
        slider.scrollBy({left: step, behavior:"smooth"});
    }

    function slideLeft(){
        slider.scrollBy({left: -step, behavior:"smooth"});
    }

    /* auto */
    function start(){
        interval = setInterval(slideRight, intervalTime);
    }

    function stop(){
        clearInterval(interval);
    }

    /* infinite reset */
    slider.addEventListener("scroll", ()=>{
        if(slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - step){
            setTimeout(()=>{
                slider.scrollLeft = 0;
            },400);
        }
    });

    /* arrows */
    right.addEventListener("click", ()=>{ stop(); slideRight(); start(); });
    left.addEventListener("click", ()=>{ stop(); slideLeft(); start(); });

    /* pause on hover */
    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);

    start();
});













const userIcon = document.querySelector(".fa-user");
const accountPanel = document.querySelector(".account-panel");
const accountOverlay = document.querySelector(".account-overlay");
const closeAccount = document.querySelector(".close-account");

userIcon.addEventListener("click", () => {
    accountPanel.classList.add("active");
    accountOverlay.classList.add("active");
});

function closePanel() {
    accountPanel.classList.remove("active");
    accountOverlay.classList.remove("active");
}

closeAccount.addEventListener("click", closePanel);
accountOverlay.addEventListener("click", closePanel);

userIcon.addEventListener("click", () => {
    accountPanel.classList.add("active");
    accountOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
});

function closePanel() {
    accountPanel.classList.remove("active");
    accountOverlay.classList.remove("active");
    document.body.style.overflow = "";
}








const cartIcon = document.querySelector(".fa-bag-shopping");
const cartPanel = document.querySelector(".cart-panel");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCart = document.querySelector(".close-cart");

cartIcon.addEventListener("click", () => {
    cartPanel.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
});

function closeCartPanel() {
    cartPanel.classList.remove("active");
    cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

closeCart.addEventListener("click", closeCartPanel);
cartOverlay.addEventListener("click", closeCartPanel);









