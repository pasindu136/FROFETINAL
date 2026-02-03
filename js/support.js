const menuIcon = document.querySelector(".menu-icon");
const pageLink = document.querySelector(".pageLink");

menuIcon.addEventListener("click", () => {
    pageLink.classList.toggle("active");
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


