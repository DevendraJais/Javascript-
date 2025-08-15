let box = document.getElementById('box');

fetch('https://dummyjson.com/products')           //fetch method
.then((res)=>{return res.json()})
.then((data)=>{
    console.log(data);                      //data is object
    console.log(data.products);             //(data object) contain (products array) so,data.products

    data.products.forEach(product => {
        console.log(product);               // logs each products object

        const div = document.createElement('div')
        div.classList.add("product-card")

        const img = document.createElement('img')
        img.src = product.thumbnail;
        img.alt = product.title;

        const heading = document.createElement('h4')
        heading.innerText = product.title;

        const price = document.createElement('span')
        price.innerText = `Price: Rs ${product.price}`

        div.appendChild(img)
        div.appendChild(heading)
        div.appendChild(price)
        box.appendChild(div);
    });
})

