export default class FilterModule {
  constructor(productsContainer, selectEl, products) {
    this.productsContainer = productsContainer;
    this.selectEl = selectEl;
    this.products = products;

    this.init();
  }

  init() {
    this.render(this.products);
    this.selectEl.addEventListener("change", () => {
      this.applyFilter(this.selectEl.value);
    });
  }

  render(products) {
    this.productsContainer.innerHTML = "";
    products.forEach(({ title, price, image, category }) => {
      const productEl = document.createElement("div");
      productEl.classList.add("product");
      productEl.innerHTML = `
        <img src="${image}" alt="${title}" width="100"/>
        <h3>${title}</h3>
        <p>${price}$</p>
        <small>${category}</small>
      `;
      this.productsContainer.appendChild(productEl);
    });
  }

  applyFilter(category) {
    if (category === "all") {
      this.render(this.products);
    } else {
      const filtered = this.products.filter(p => p.category === category);
      this.render(filtered);
    }
  }
}
