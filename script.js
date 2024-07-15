/*
*
*   Payson's Market - Script
*
*   Made By https://github.com/paysonism
*
*/

function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

const products = {
    1: { 
        name: "Tactical Nuke", 
        price: 19.99, 
        description: "a 100% real nuke",
        buyUrl: "https://discord.gg/saturniv"
    },
    2: { 
        name: "Boobs", 
        price: 24.99, 
        description: "who doesnt like boobs?",
        buyUrl: "https://github.com/paysonism"
    },
};

let currentProductId = null;

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    currentProductId = urlParams.get('id');

    const product = products[currentProductId];

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `$${product.price}`;
        document.getElementById('product-description').textContent = product.description;
    } else {
        document.getElementById('product-details').innerHTML = '<p>Product not found</p>';
    }
}

function purchaseProduct() {
    const product = products[currentProductId];
    if (product && product.buyUrl) {
        window.location.href = product.buyUrl;
    } else {
        alert('Unable to process purchase. Please try again later.');
    }
}