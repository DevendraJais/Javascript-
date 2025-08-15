// Get the box element
let box = document.getElementById('box');

// Async function to fetch products
async function fetchProducts() {
    try {
        let response = await fetch('https://dummyjson.com/products'); // API Call
        let data = await response.json(); // Convert response to JSON
        displayProducts(data.products); // Call function to display data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display products on the page
function displayProducts(products) {
    box.innerHTML = ""; // Clear previous content
    products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add("product-card");

        const img = document.createElement('img');
        img.src = product.thumbnail;
        img.alt = product.title;

        const heading = document.createElement('h4');
        heading.innerText = product.title;

        const price = document.createElement('span');
        price.innerText = `Price: Rs ${product.price}`;

        div.appendChild(img);
        div.appendChild(heading);
        div.appendChild(price);
        box.appendChild(div);
    });
}

// Call API when page loads
fetchProducts();