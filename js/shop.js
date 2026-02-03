

const menuIcon = document.querySelector(".menu-icon");
const pageLink = document.querySelector(".pageLink");

menuIcon.addEventListener("click", () => {
    pageLink.classList.toggle("active");
});


const products = [
    { name: "Baby Kit", price: 3200, image: "../assets/shop/baby kit.png", category: ["kids"] },
    { name: "Belt", price: 1200, image: "../assets/shop/belt.png", category: ["accessories", "men"] },
    { name: "Black T-Shirt", price: 2500, image: "../assets/shop/black t shirt.png", category: ["men"] },
    { name: "Blue T-Shirt", price: 2500, image: "../assets/shop/blue t shirt.png", category: ["men"] },
    { name: "Boys Short", price: 1800, image: "../assets/shop/boys short.png", category: ["kids"] },
    { name: "Buruka", price: 6500, image: "../assets/shop/buruka.png", category: ["women"] },
    { name: "Child Denim", price: 2600, image: "../assets/shop/child denim.png", category: ["kids"] },
    { name: "Child Frock", price: 3000, image: "../assets/shop/child frock.png", category: ["kids"] },
    { name: "Child T-Shirt", price: 2200, image: "../assets/shop/child t shirt.png", category: ["kids"] },
    { name: "Deck Shoes", price: 7800, image: "../assets/shop/deck shoes.png", category: ["men", "accessories"] },
    { name: "Hand Bag 02", price: 6400, image: "../assets/shop/hand bag 2.png", category: ["women", "accessories"] },
    { name: "Hand Bag 01", price: 6000, image: "../assets/shop/hand bag1.png", category: ["women", "accessories"] },
    { name: "Hand Bag 03", price: 7000, image: "../assets/shop/hand bag3.png", category: ["women", "accessories"] },
    { name: "Hijab", price: 2000, image: "../assets/shop/hijab.png", category: ["women"] },
    { name: "Kurta", price: 5200, image: "../assets/shop/kurta.png", category: ["men"] },
    { name: "Ladies Blouse", price: 2800, image: "../assets/shop/ladies blouse.png", category: ["women"] },
    { name: "Ladies Boot Shoes", price: 8200, image: "../assets/shop/ladies boot shoes.png", category: ["women", "accessories"] },
    { name: "Ladies Cap", price: 1600, image: "../assets/shop/ladies cap.png", category: ["women", "accessories"] },
    { name: "Ladies Denim", price: 4800, image: "../assets/shop/ladies denim.png", category: ["women"] },
    { name: "Ladies Frock 02", price: 5400, image: "../assets/shop/ladies frock2.png", category: ["women"] },
    { name: "Ladies Frock 03", price: 5600, image: "../assets/shop/ladies frock3.png", category: ["women"] },
    { name: "Gym Pant", price: 3900, image: "../assets/shop/ladies long fit gym pant.png", category: ["women"] },
    { name: "Office Pant", price: 4200, image: "../assets/shop/ladies office long pant.png", category: ["women"] },
    { name: "Ladies Short", price: 2600, image: "../assets/shop/ladies short pant.png", category: ["women"] },
    { name: "Ladies Skirt", price: 3100, image: "../assets/shop/ladies skirt.png", category: ["women"] },
    { name: "Men Cap", price: 1700, image: "../assets/shop/mens cap.png", category: ["men", "accessories"] },
    { name: "Men Denim", price: 4600, image: "../assets/shop/mens denim.png", category: ["men"] },
    { name: "Office Shirt", price: 3800, image: "../assets/shop/mens office shirts.png", category: ["men"] },
    { name: "Office Trouser", price: 4200, image: "../assets/shop/mens office trouser.png", category: ["men"] },
    { name: "Office Shoes", price: 8500, image: "../assets/shop/office shoes.png", category: ["men", "accessories"] },
    { name: "Office Tie", price: 1500, image: "../assets/shop/office tie.png", category: ["men", "accessories"] },
    { name: "Blue Saree", price: 9000, image: "../assets/shop/saree blue.png", category: ["women"] },
    { name: "Red Saree", price: 9200, image: "../assets/shop/saree red.png", category: ["women"] },
    { name: "School Bag", price: 3600, image: "../assets/shop/school bag.png", category: ["kids", "accessories"] },
    { name: "Serviettes", price: 800, image: "../assets/shop/Serviettes.png", category: ["accessories"] },
    { name: "Vest", price: 1500, image: "../assets/shop/vest.png", category: ["men"] },
    { name: "Wedding Frock", price: 12500, image: "../assets/shop/wedding frock.png", category: ["women"] }
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const catBtns = document.querySelectorAll(".cat-btn");

let activeCategory = "all";

function renderProducts() {
    grid.innerHTML = "";
    const keyword = searchInput.value.toLowerCase();

    products
        .filter(p =>
            (activeCategory === "all" || p.category.includes(activeCategory)) &&
            p.name.toLowerCase().includes(keyword)
        )
        .forEach(p => {
            grid.innerHTML += `
                <div class="product-card">
                    <img src="${p.image}" alt="${p.name}">
                    <h3>${p.name}</h3>
                    <p>Rs. ${p.price}</p>
                    <button class="add-cart">Add to Cart</button>
                </div>
            `;
        });
}

renderProducts();

searchInput.addEventListener("input", renderProducts);

catBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        catBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.dataset.category;
        renderProducts();
    });
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
