// Create API URL for fetching bestsellers
const baseurl = "https://www.aloyoga.com";
const bestsellerurl = "/collections/bestsellers/products.json";
const limit = "?limit=12";
const bestfullurl = baseurl + bestsellerurl + limit;

// Fetch JSON data and call the generationProducts function
async function getProducts(generationProducts) {
  const res = await fetch(bestfullurl);
  const data = await res.json();
  generationProducts(data.products);
}

// Generate product cards and append to the container
function generationProducts(products) {
  const container = document.querySelector(".product-cards");

  products.forEach((item) => {
    let image = item.images?.[0]?.src;
    let title = item.title;
    let price = item.variants?.[0]?.price;
    let handle = item.handle;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${image}" alt="${title}">
      <div class="title-price">
        <a class="title">${title}</a>
        <span class="price">$${price}</span>
      </div>
    `;

    container.appendChild(card);

    // Add click event to navigate to the detail page with handle
    getproductid(card, handle);
  });
}

// Set product handle as URL parameter for detail page navigation
function getproductid(card, handle) {
  card.addEventListener("click", () => {
    window.location.href = `src/details.html?handle=${handle}`;
  });
  
}

// Initialize fetching products
getProducts(generationProducts);



console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

console.log("End")


let arr = [1,2,3,4]
let max = Math.max(...arr[]);

console.log()