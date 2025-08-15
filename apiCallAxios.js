
let box = document.getElementById('box');

// Async function to fetch data using Axios
async function fetchProducts() {
    try {
        let response = await axios.get('https://dummyjson.com/products'); // Axios GET request
        displayProducts(response.data.products); // Pass products array
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display products
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
