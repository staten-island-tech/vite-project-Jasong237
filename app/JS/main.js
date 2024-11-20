import "../css/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { products } from "../JS/products.js";

let theme = 0;
function addProducts() {
  products.forEach((product) => {
    addCard(product);
  });
}

function addCard(product) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"> 
      <h2 class="product-name"> ${product.name} </h2>
    <img class="product-img" src="${product.image}" alt="${product.name}">
      <h2 class="product-price"> Price: $${product.price} </h2>
    </div>`
  );
}

addProducts();

function themeone(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";
  theme = 1;
  addBackgroundOne();
  products.forEach((product) => {
    addThemeOne(product);
  });
}

function addThemeOne(product) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="cardthemeone"> 
        <h2 class="product-name" id="${product.name}"> ${product.name} </h2>
        <img class="product-img" src="${product.image}" alt="${product.name}">
        <h2 class="product-price"> Price: $${product.price} </h2>
      </div>`
  );
}

function addBackgroundOne() {
  document.body.classList.remove("bg-theme-two");
  document.body.classList.add("bg-theme-one");
}

function themetwo(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";
  theme = 2;
  addBackgroundTwo();
  products.forEach((product) => {
    addThemeTwo(product);
  });
}

function addThemeTwo(product) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="cardthemetwo"> 
        <h2 class="product-name" id="${product.name}"> ${product.name} </h2>
        <img class="product-img" src="${product.image}" alt="${product.name}">
        <h2 class="product-price"> Price: $${product.price} </h2>
      </div>`
  );
}

function addBackgroundTwo() {
  document.body.classList.remove("bg-theme-one");
  document.body.classList.add("bg-theme-two");
}

function themethree(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";
  theme = 0;
  addBackgroundThree();
  products.forEach((product) => {
    addCard(product);
  });
}

function addBackgroundThree() {
  document.body.classList.remove("bg-theme-one");
  document.body.classList.remove("bg-theme-two");
}

function kitchen(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";

  const kitchenProducts = products.filter((product) =>
    product.category.includes("kitchen")
  );
  kitchenProducts.forEach((product) => {
    if (theme === 1) {
      addCard(product);
    }
    if (theme === 2) {
      addThemeOne(product);
    }
    if (theme === 3) {
      addThemeTwo(product);
    }
  });
}

function clothing(event) {
  event.preventDefault();

  document.querySelector(".container").innerHTML = "";

  const clothingProducts = products.filter((product) =>
    product.category.includes("Clothing")
  );

  clothingProducts.forEach((product) => {
    if (theme === 0) {
      addCard(product);
    }
    if (theme === 1) {
      addThemeOne(product);
    }
    if (theme === 2) {
      addThemeTwo(product);
    }
  });
}

DOMSelectors.button1.addEventListener("click", themeone);
DOMSelectors.button2.addEventListener("click", themetwo);
DOMSelectors.button3.addEventListener("click", themethree);
DOMSelectors.button4.addEventListener("click", kitchen);
DOMSelectors.button5.addEventListener("click", clothing);

// cd app
// npm install
// npm run dev

//last day tuesday!
