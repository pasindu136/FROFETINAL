const menuIcon = document.querySelector(".menu-icon");
const pageLink = document.querySelector(".pageLink");

menuIcon.addEventListener("click", () => {
    pageLink.classList.toggle("active");
});




const collections = [
    {
        title: "Men's Collection",
        items: "Office • Casual • Accessories",
        image: "../assets/shop/mens office shirts.png"
    },
    {
        title: "Women's Collection",
        items: "Elegant • Modern • Traditional",
        image: "../assets/shop/ladies frock2.png"
    },
    {
        title: "Kids Collection",
        items: "Playful • Comfortable",
        image: "../assets/shop/child frock.png"
    },
    {
        title: "Accessories",
        items: "Bags • Shoes • Essentials",
        image: "../assets/shop/hand bag1.png"
    },
    {
        title: "Wedding Wear",
        items: "Luxury • Exclusive",
        image: "../assets/shop/wedding frock.png"
    },
    {
        title: "Traditional Wear",
        items: "Saree • Kurta • Hijab",
        image: "../assets/shop/saree red.png"
    }
];

const grid = document.getElementById("collectionGrid");

collections.forEach(col => {
    grid.innerHTML += `
        <div class="collection-card">
            <img src="${col.image}" alt="${col.title}">
            <div class="collection-overlay">
                <div class="collection-info">
                    <h3>${col.title}</h3>
                    <span>${col.items}</span>
                </div>
            </div>
        </div>
    `;
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
