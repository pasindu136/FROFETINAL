
// Shop Page Logic
document.addEventListener("DOMContentLoaded", () => {

    // 1. Navigation Menu
    const menuIcon = document.querySelector(".menu-icon");
    const pageLink = document.querySelector(".pageLink");
    if (menuIcon && pageLink) {
        menuIcon.addEventListener("click", () => {
            pageLink.classList.toggle("active");
        });
    }

    // 2. Product Rendering
    const grid = document.getElementById("productGrid");
    const searchInput = document.getElementById("searchInput");
    const catBtns = document.querySelectorAll(".cat-btn");

    // Guard clause: if we are not on the shop page (no grid), stop here.
    if (!grid) return;

    // Safety check for data
    if (!window.products || !Array.isArray(window.products)) {
        console.error("Products data not loaded!");
        grid.innerHTML = "<p>Error loading products. Please refresh.</p>";
        return;
    }

    const products = window.products;
    let activeCategory = "all";

    function renderProducts() {
        grid.innerHTML = "";
        const keyword = searchInput ? searchInput.value.toLowerCase() : "";

        products.forEach((p, index) => {
            // Check matches
            const matchesCategory = (activeCategory === "all" || (p.category && p.category.includes(activeCategory)));
            const matchesSearch = p.name.toLowerCase().includes(keyword);

            if (matchesCategory && matchesSearch) {
                grid.innerHTML += `
                    <div class="product-card" onclick="window.location.href='./product-view.html?id=${index}'" style="cursor: pointer;">
                        <img src="${p.image}" alt="${p.name}" loading="lazy" class="fade-in-img">
                        <h3>${p.name}</h3>
                        <p>Rs. ${p.price}</p>
                        <button class="add-cart" onclick="event.stopPropagation(); addToCart({name: '${p.name}', price: '${p.price}', image: '${p.image}'})">Add to Cart</button>
                    </div>
                `;
            }
        });

        // If no results
        if (grid.innerHTML === "") {
            grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>No products found.</p>";
        }
    }

    // Initial Render
    renderProducts();

    // Event Listeners
    if (searchInput) {
        searchInput.addEventListener("input", renderProducts);
    }

    if (catBtns) {
        catBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                catBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                activeCategory = btn.dataset.category;
                renderProducts();
            });
        });
    }

    // 3. User Panel Logic (Local to this page's elements if they exist)
    const userIcon = document.querySelector(".fa-user");
    const accountPanel = document.querySelector(".account-panel");
    const accountOverlay = document.querySelector(".account-overlay");
    const closeAccount = document.querySelector(".close-account");

    if (userIcon) {
        userIcon.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    }

    function closePanel() {
        if (accountPanel) accountPanel.classList.remove("active");
        if (accountOverlay) accountOverlay.classList.remove("active");
    }

    if (closeAccount) closeAccount.addEventListener("click", closePanel);
    if (accountOverlay) accountOverlay.addEventListener("click", closePanel);

    // Note: Cart Logic is handled by cart.js completely now.
});
