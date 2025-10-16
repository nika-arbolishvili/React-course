const handle = new URLSearchParams(window.location.search).get("handle");

async function getProduct(handle) {
  const res = await fetch(`https://www.aloyoga.com/products/${handle}.json`);
  const data = await res.json();
  generateProducts(data.product);
}

function generateProducts(product) {
  const mainImg = document.querySelector(".main-img");
  const sizesDiv = document.querySelector(".sizes");
  const detailsInfo = document.querySelector(".details-info");
  const colum = document.getElementsByClassName("colum");

  sizesDiv.innerHTML = "";

  // Set main-img src and alt
  mainImg.src = product.images[0]?.src;
  mainImg.alt = product.title;

  // Generate size options
  product.options.forEach((option) => {
    if (option.name.toLowerCase() === "size") {
      option.values.forEach((size) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.id = `size-${size}`;
        input.name = "size";
        input.value = size;
        const label = document.createElement("label");

        // Link the label to its corresponding input and display the size
        label.htmlFor = `size-${size}`;
        label.textContent = size;

        sizesDiv.appendChild(input);
        sizesDiv.appendChild(label);
      });
    }
  });

  // Create title element
  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  const titleH3 = document.createElement("h3");
  titleH3.textContent = product.title;
  titleDiv.appendChild(titleH3);

  // Create price element
  const priceSpan = document.createElement("span");
  priceSpan.className = "price";
  priceSpan.textContent = `$${product.variants?.[0]?.price || "0.00"}`;

  // Create description element
  const descDiv = document.createElement("div");
  descDiv.className = "description";

  const description = document.createElement("h4");
  description.className = "desc";
  description.innerHTML = product.body_html;
  descDiv.appendChild(description);

  // Append elements to details-info
  detailsInfo.appendChild(titleDiv);
  detailsInfo.appendChild(priceSpan);
  detailsInfo.appendChild(sizesDiv);

  colum[0].appendChild(descDiv);
}

getProduct(handle);
