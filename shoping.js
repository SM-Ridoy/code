

//Memory card
function productPrice(price, productId) {
    const productSelect = document.getElementById(productId);
    productSelect.innerText = price;


    const productPriceAmount = parseFloat(price);

    const productTotal = document.getElementById("total-price");
    const productText = productTotal.innerText;
    const productAmount = parseFloat(productText);
    const sum = productAmount + productPriceAmount;

    const set = document.getElementById("total-price").innerText = sum;
}


// Memory card
document.getElementById("eigth-gb").addEventListener("click", function () {
    productPrice("12", "extra-memory");
});

document.getElementById("sixtine-gb").addEventListener("click", function () {
    productPrice("15", "extra-memory");
});

//Storage
document.getElementById("first-storage").addEventListener("click", function () {
    productPrice("0", "extra-storage");
});

document.getElementById("second-storage").addEventListener("click", function () {
    productPrice("200", "extra-storage");
});
document.getElementById("third-storage").addEventListener("click", function () {
    productPrice("300", "extra-storage");
});

// Delivery
document.getElementById("free-delivery").addEventListener("click", function () {
    productPrice("0", "delivery-cost");
});
document.getElementById("cost-delivery").addEventListener("click", function () {
    productPrice("20", "delivery-cost");
});