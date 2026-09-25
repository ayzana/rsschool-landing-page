"use strict";
import data from "./data/products.json" with { type: "json" };

const item = data[0];

function createMenuItem(item) {
  const el = document.createElement("li");
  el.className = "menu-item";
  el.dataset.category = item.category;

  const imageBox = document.createElement("div");
  imageBox.className = "menu-image-box";

  const menuImage = document.createElement("img");
  menuImage.className = "menu-image";
  menuImage.src = `./assets/images/${item.category}-1.png`;
  menuImage.alt = item.category;
  imageBox.append(menuImage);

  const itemDescr = document.createElement("div");
  itemDescr.className = "menu-item-descr";

  const descrText = document.createElement("div");
  descrText.className = "descr-text";
  const title = document.createElement("p");
  title.className = "descr-title";
  title.textContent = item.name;
  const descrInfo = document.createElement("p");
  descrInfo.className = "descr-info";
  descrInfo.textContent = item.description;
  descrText.append(title, descrInfo);

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = "$" + item.price;
  itemDescr.append(descrText, price);

  el.append(imageBox, itemDescr);
  return el;
}
document.querySelector(".menu-list").appendChild(createMenuItem(item));
/* Theme */

const themeDarkBTN = document.querySelector(".theme-dark");
const themeLightBTN = document.querySelector(".theme-light");

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "light") {
    themeDarkBTN.classList.remove("active");
    themeLightBTN.classList.add("active");
  } else {
    themeDarkBTN.classList.add("active");
    themeLightBTN.classList.remove("active");
  }
}

themeDarkBTN.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = "light";
  if (currentTheme === "light") newTheme = "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  themeDarkBTN.classList.add("active");
  themeLightBTN.classList.remove("active");
  localStorage.setItem("theme", newTheme);
});

themeLightBTN.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = "dark";
  if (currentTheme === "dark") newTheme = "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  themeLightBTN.classList.add("active");
  themeDarkBTN.classList.remove("active");
  localStorage.setItem("theme", newTheme);
});

/* Burger */
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const burgerItems = document.querySelectorAll(".burger-item");

function toggleBurgerMenu() {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("active");

  if (burger.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

burger.addEventListener("click", toggleBurgerMenu);

burgerItems.forEach(function (item) {
  item.addEventListener("click", toggleBurgerMenu);
});
