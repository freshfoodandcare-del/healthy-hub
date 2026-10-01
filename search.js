const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchProduct() {

    const search = searchInput.value.trim().toLowerCase();

    if (search === "") {
        alert("Please enter something");
        return;
    }

    // Beetroot
    if (search === "beetroot") {
        window.location.href = "vegetables.html?search=beetroot";
        return;
    }

    // Vegetable category
    if (search === "vegetable" || search === "vegetables") {
        window.location.href = "vegetables.html";
        return;
    }

    // Fruit category
    if (search === "fruit" || search === "fruits") {
        window.location.href = "fruits.html";
        return;
    }

    // Keerai
    if (search === "keerai" || search === "green leaves") {
        window.location.href = "keerai.html";
        return;
    }

    // Cut vegetables
    if (search === "cut vegetable" || search === "cut vegetables") {
        window.location.href = "cut-vegetables.html";
        return;
    }

    // Fruit salad
    if (search === "fruit salad") {
        window.location.href = "fruit-salad.html";
        return;
    }

    // Ready mix
    if (search === "ready mix") {
        window.location.href = "ready-mix.html";
        return;
    }

    alert("Product or category not found");
}


searchBtn.addEventListener("click", searchProduct);

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchProduct();
    }

});
function searchCategory() {

    let search = searchInput.value.trim().toLowerCase();

    if (search === "") {
        alert("Please enter a product or category");
        return;
    }

    if (
        search.includes("keerai") ||
        search.includes("green leaves") ||
        search.includes("greenleaf")
    ) {
        window.location.href = "keerai.html";
    }

    else {
        alert("Product not found");
    }
}