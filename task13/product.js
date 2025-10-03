const productId = new URLSearchParams(window.location.search).get("id");

async function details(productId) {
  const baseUrl = "https://fakestoreapi.com/products";
  const res = await fetch(`${baseUrl}/${productId}`);
  const data = await res.json();

  const productContainer = document.getElementById("product-detail");


  const productEl = document.createElement("div");
  productEl.classList.add("product");

  productEl.innerHTML = `
    <img src="${data.image}"
    <div class="product-info">
      <h3>${data.price}</h3>
      <span>${data.price}$</span>
      <div class="overview">
        <h3>Description</h3>
        <p>${data.description}</p>
      </div>
    </div>
  `;

  productContainer.appendChild(productEl);
}

details(productId);
