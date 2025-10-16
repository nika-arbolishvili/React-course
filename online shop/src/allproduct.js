// Create API URL for fetching bestsellers
const baseurl = "https://www.aloyoga.com";
const limit = "?limit=24";
const allproductsurl = "/collections/womens-shop-all/products.json";
const fullurl = baseurl + allproductsurl + limit;

// Fetch JSON data and call the generationProducts function
async function getProducts(generationProducts) {
  const res = await fetch(fullurl);
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
    window.location.href = `details.html?handle=${handle}`;
  });
}

// Initialize fetching products
getProducts(generationProducts);
