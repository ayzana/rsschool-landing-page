"use strict";
import data from "./data/products.json" with { type: "json" };

window.onload = function () {
  tabsClickHandler();
  menuItemsClickHandler();
};

function createMenuItem(item) {
  const el = document.createElement("li");
  el.className = "menu-item";
  el.dataset.category = item.category;
  el.dataset.id = item.id;
  const imageBox = document.createElement("div");
  imageBox.className = "menu-image-box";

  const menuImage = document.createElement("img");
  menuImage.className = "menu-image";
  menuImage.src = `./assets/images/${item.id}.png`;
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

data.forEach((el) => {
  document.querySelector(".menu-list").appendChild(createMenuItem(el));
});

const tabsClickHandler = () => {
  document.querySelector(".menu-tabs").addEventListener("click", (e) => {
    if (e.target.closest(".tab-item")) {
      let activeTab = e.target.closest(".tab-item");
      removesActiveTabs();
      selectTab(activeTab);
      filterMenuItems(activeTab.textContent);
    }
  });
};

const removesActiveTabs = () => {
  let tabs = document.querySelectorAll(".tab-item");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};

const selectTab = (activeTab) => {
  activeTab.classList.add("active");
};

const filterMenuItems = (activeTab) => {
  let menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.classList.add("hidden");

    if (item.dataset.category == activeTab.trim())
      item.classList.remove("hidden");
  });
};

/*Modal*/
const modalWrapper = document.querySelector(".modal-overlay");
const modalContainer = document.querySelector(".modal-wrapper");

modalContainer.addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});

const modalClose = () => {
  modalWrapper.classList.add("hidden");
  document.body.style.overflow = "auto";
};

modalWrapper.addEventListener("click", (event) => {
  if (event._isClickWithInMenu) return;
  modalClose();
});
const createModal = (item) => {
  const el = document.createElement("div");
  el.className = "modal";

  const imageBox = document.createElement("div");
  imageBox.className = "menu-image-box";

  const menuImage = document.createElement("img");
  menuImage.className = "menu-image";
  menuImage.src = `./assets/images/${item.id}.png`;
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
};
const modalShow = (item) => {
  modalContainer.append(createModal(item));
  modalWrapper.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};
const menuItemsClickHandler = () => {
  document.querySelector(".menu-list").addEventListener("click", (e) => {
    if (e.target.closest(".menu-item")) {
      let activeItem = e.target.closest(".menu-item");
      const index = data.findIndex((item) => item.id === activeItem.dataset.id);
      modalShow(data[index]);
    }
  });
};
