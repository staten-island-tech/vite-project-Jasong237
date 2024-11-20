import "../css/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { products } from "../JS/products.js";

let filterver = "zero";
let themever = "zero";

function addProducts() {
  if (filterver === "zero") {
    products.forEach((product) => {
      addCard(product);
    });
  }
  if (filterver === "one") {
    const kitchenProds = products.filter((product) =>
      product.category.includes("Kitchen")
    );
    kitchenProds.forEach((product) => {
      addCard(product);
    });
  }
  if (filterver === "two") {
    const clothingProds = products.filter((product) =>
      product.category.includes("Clothing")
    );
    clothingProds.forEach((product) => {
      addCard(product);
    });
  }
}

function addCard(product) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="${themever}"> 
      <h2 class="product-name"> ${product.name} </h2>
    <img class="product-img" src="${product.image}" alt="${product.name}">
      <h2 class="product-price"> Price: $${product.price} </h2>
    </div>`
  );
}

function themeone() {
  document.querySelector(".container").innerHTML = "";
  themever = "one";
  addBackgroundOne();
  addProducts();
}

function themetwo() {
  document.querySelector(".container").innerHTML = "";
  themever = "two";
  addBackgroundTwo();
  addProducts();
}

function themethree() {
  document.querySelector(".container").innerHTML = "";
  themever = "zero";
  addBackgroundThree();
  addProducts();
}

function kitchen(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";
  filterver = "one";
  addProducts();
}

function clothing(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";
  filterver = "two";
  addProducts();
}

function reset(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";
  filterver = "zero";
  addProducts();
}

function addBackgroundOne() {
  document.body.classList.remove("bg-theme-two");
  document.body.classList.add("bg-theme-one");
}

function addBackgroundTwo() {
  document.body.classList.remove("bg-theme-one");
  document.body.classList.add("bg-theme-two");
}

function addBackgroundThree() {
  document.body.classList.remove("bg-theme-one");
  document.body.classList.remove("bg-theme-two");
}

addProducts();
DOMSelectors.button1.addEventListener("click", themeone);
DOMSelectors.button2.addEventListener("click", themetwo);
DOMSelectors.button3.addEventListener("click", themethree);
DOMSelectors.button4.addEventListener("click", kitchen);
DOMSelectors.button5.addEventListener("click", clothing);
DOMSelectors.button6.addEventListener("click", reset);

// cd app
// npm install
// npm run dev

//last day tuesday!
