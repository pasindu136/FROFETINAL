// Cart Logic
let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('myCart')) || [];
} catch (e) {
    console.error("Cart data corrupted. Resetting.", e);
    localStorage.removeItem('myCart');
    cart = [];
}

const cartBody = document.querySelector('.cart-body');
const cartTotal = document.querySelector('.cart-footer strong');
const cartCountBubble = document.querySelector('.fa-bag-shopping'); // Optional: if we want to add a badge later

// Function to add item
window.addToCart = function (product) {
    cart.push(product);
    localStorage.setItem('myCart', JSON.stringify(cart));
    renderCart();

    // Show success message
    showToast(`${product.name} added to cart!`);

    // Optional: Open cart slightly or just update badge? 
    // User requested message, so we keep toast.
}

// Function to remove item
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('myCart', JSON.stringify(cart));
    renderCart();
}

// Function to render cart
function renderCart() {
    if (!cartBody) return; // Guard clause if cart panel is missing

    cartBody.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartBody.innerHTML = "<p style='text-align:center; padding:20px;'>Your bag is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            const price = parseFloat(item.price.replace(/[^0-9.]/g, '')); // Ensure price is number
            total += price;

            cartBody.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-info">
                        <h4>${item.name}</h4>
                        <p>Size: ${item.size || 'Standard'}</p>
                        <span>Rs ${price}</span>
                    </div>
                    <i class="fa-solid fa-trash" style="color: #ff4d4d; cursor: pointer; align-self: center;" onclick="removeFromCart(${index})"></i>
                </div>
            `;
        });
    }

    if (cartTotal) {
        cartTotal.innerText = "Rs " + total;
    }
}

// Helper to open cart (reusing existing logic class)
// Helper to open/close cart
function openCart() {
    const panel = document.querySelector('.cart-panel');
    const overlay = document.querySelector('.cart-overlay');
    if (panel && overlay) {
        panel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = "hidden";
    }
}

function closeCart() {
    const panel = document.querySelector('.cart-panel');
    const overlay = document.querySelector('.cart-overlay');
    if (panel && overlay) {
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = "";
    }
}

// Toast Function
function showToast(message) {
    // Create toast element if not exists
    let toast = document.querySelector('.toast-box');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-box';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    toast.classList.add('show');

    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Helper to wire up checkout button (must be called after render or in DOMContentLoaded)
function setupCheckoutBtn() {
    const btn = document.querySelector('.cart-footer button');
    if (btn) {
        btn.onclick = () => {
            // Check if cart is empty
            if (cart.length === 0) {
                alert("Your bag is empty!");
                return;
            }

            // Check current path to determine correct relative link
            const isPagesDir = window.location.pathname.includes('/pages/');
            window.location.href = isPagesDir ? './checkout.html' : './pages/checkout.html';
        };
    }
}

// Helper to wire up global cart listeners (icon, close button, overlay)
function setupGlobalCartListeners() {
    // Open Cart Icon
    const cartIcons = document.querySelectorAll('.fa-bag-shopping');
    cartIcons.forEach(icon => {
        icon.addEventListener('click', openCart);
        icon.style.cursor = 'pointer';
    });

    // Close Cart Icon
    const closeBtn = document.querySelector('.close-cart');
    if (closeBtn) closeBtn.addEventListener('click', closeCart);

    // Overlay Click
    const overlay = document.querySelector('.cart-overlay');
    if (overlay) overlay.addEventListener('click', closeCart);
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    setupCheckoutBtn();
    setupGlobalCartListeners();
});
