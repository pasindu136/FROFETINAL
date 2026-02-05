document.addEventListener('DOMContentLoaded', () => {
    // Load Cart
    const cart = JSON.parse(localStorage.getItem('myCart')) || [];
    const container = document.querySelector('.summary-items');
    const totalEl = document.getElementById('checkoutTotal');
    const placeOrderBtn = document.querySelector('.place-order-btn');
    const overlay = document.querySelector('.overlay');

    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        placeOrderBtn.disabled = true;
        placeOrderBtn.style.background = "#ccc";
        placeOrderBtn.style.cursor = "not-allowed";
    } else {
        container.innerHTML = "";
        cart.forEach(item => {
            const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
            total += price;
            container.innerHTML += `
                <div class="summary-item">
                    <span>${item.name} <small>(${item.size || '-'})</small></span>
                    <span>Rs. ${price}</span>
                </div>
            `;
        });
    }

    totalEl.innerText = "Rs. " + total;

    // Place Order Form Submission
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("Cart is empty!");
            return;
        }

        // Show Success Animation
        overlay.classList.add('active');

        // Clear Cart
        localStorage.removeItem('myCart');

        // Redirect after delay
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 3000);
    });
});
