const basseurl = 'https://fakestoreapi.com/products'

async function getproducts(basseurl) {
  const res = await fetch(basseurl);
  const data = await res.json();

  showproducts(data)
}

async function showproducts(products) {
  products.forEach((product) => {
    const { id, title, price, description, category, image } = product;
    const productEl = document.createElement("div");
    productEl.classList.add("product");
      console.log(products)
    productEl.innerHTML = `
      <img src="${image}" alt="${title}" />
      <div class="product-info">
        <h3>${title}</h3>
        <span>${price}$</span>
        <div class="overview">
          <h3>description</h3>
          <p>${description}</p>
        </div>
      </div>
    `;

    main.appendChild(productEl);

    productEl.addEventListener("click", () => {
      setid(id);
    });
  });
}

function setid(productId) {
  window.location.href = `product.html?id=${productId}`;
}

getproducts(basseurl);
