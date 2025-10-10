async function getproducts() {
  const baseurl = "https://www.aloyoga.com";
  const bestsellerurl = "/collections/bestsellers/products.json";
  const bestfullurl = baseurl + bestsellerurl;
  const allurl = "/collections/womens-shop-all/products.json";
  const fullallurl = baseurl + allurl;
  let limit = "?limit=12";
  let data = null;

  if (window.location.href.endsWith("index.html")) {
    console.log(window.location.href);
    const res = await fetch(`${bestfullurl}${limit}`);
    data = await res.json();
  } else {
    if (window.location.href.endsWith("allproduct.html")) {
      console.log(window.location.href);
      const res = await fetch(`${fullallurl}${limit}`);
      data = await res.json();
    }
  }

  generationProducts(data);
}
function generationProducts(products) {
  const data = products.products;
  const container = document.querySelector(".product-cards");

  data.forEach((item) => {
    const image = item.images[0].src;
    const title = item.title;
    const price = item.variants[0].price;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${image}" alt="${title}">
      <div class="title-price">
        <a class="title">${title}</a>
        <span class="price">$ ${price}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

getproducts();
