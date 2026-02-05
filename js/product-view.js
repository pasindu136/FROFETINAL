document.addEventListener('DOMContentLoaded', () => {
    // Get Product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const products = window.products || [];

    if (productId === null || !products[productId]) {
        // Handle invalid ID
        document.querySelector('.product-view-container').innerHTML = '<h2>Product not found</h2><a href="shop.html">Back to Shop</a>';
        return;
    }

    const product = products[productId];

    // Render Product Details
    document.getElementById('mainImage').src = product.image;
    document.getElementById('productTitle').innerText = product.name;
    document.getElementById('productPrice').innerText = `Rs. ${product.price}`;

    // Breadcrumb
    document.getElementById('breadcrumbCurrent').innerText = product.name;

    // Quantity Logic
    const qtyInput = document.getElementById('qtyInput');
    document.getElementById('qtyMinus').addEventListener('click', () => {
        let val = parseInt(qtyInput.value);
        if (val > 1) qtyInput.value = val - 1;
    });
    document.getElementById('qtyPlus').addEventListener('click', () => {
        let val = parseInt(qtyInput.value);
        qtyInput.value = val + 1;
    });

    // Size Selection
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Add to Cart Logic
    document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        const selectedSize = document.querySelector('.size-btn.active').innerText;
        addToCart({
            name: product.name,
            price: product.price.toString(),
            image: product.image,
            size: selectedSize
        });
    });
});
