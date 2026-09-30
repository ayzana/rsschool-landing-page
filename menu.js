"use strict";
import data from "./data/products.json" with { type: "json" };

window.onload = function () {
  tabsClickHandler();
  menuItemsClickHandler();
  generateItems("coffee");
  // filterMenuItems("coffee");
};
const menuList = document.querySelector(".menu-list");
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

const generateItems = (category) => {
  menuList.innerHTML = "";
  data
    .filter((item) => item.category === category)
    .forEach((el) => {
      menuList.appendChild(createMenuItem(el));
    });
  const menuItems = document.querySelectorAll(".menu-item");
  if ((menuItems.length > 4) & (window.innerWidth < 801)) {
    menuButton.style.display = "flex";
  } else {
    menuButton.style.display = "none";
  }
};
const tabsClickHandler = () => {
  document.querySelector(".menu-tabs").addEventListener("click", (e) => {
    if (e.target.closest(".tab-item")) {
      let activeTab = e.target.closest(".tab-item");
      removesActiveTabs();
      selectTab(activeTab);

      generateItems(activeTab.textContent.trim());
      const menuItems = document.querySelectorAll(".menu-item");
      if ((menuItems.length > 4) & (window.innerWidth < 800)) {
        menuButton.style.display = "flex";
      } else {
        menuButton.style.display = "none";
      }
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

/*Modal*/
const modalWrapper = document.querySelector(".modal-overlay");

modalWrapper.addEventListener("click", (event) => {
  if (event._isClickWithInMenu) return;
  modalClose();
});

const createSizeTabs = (key, value) => {
  const button = document.createElement("div");
  button.className = "tab-item modal-tab";
  button.dataset.id = key;
  const buttonIcon = document.createElement("div");
  buttonIcon.className = "tab-icon";
  buttonIcon.textContent = key;

  const buttonText = document.createElement("p");
  buttonText.className = "tab-text";
  buttonText.textContent = value.size;
  button.append(buttonIcon, buttonText);

  return button;
};
const createAddTabs = (key, value) => {
  const button = document.createElement("div");
  button.className = "tab-item modal-tab";
  button.dataset.id = Number(key);
  const buttonIcon = document.createElement("div");
  buttonIcon.className = "tab-icon";
  buttonIcon.textContent = Number(key) + 1;

  const buttonText = document.createElement("p");
  buttonText.className = "tab-text";
  buttonText.textContent = value.name;
  button.append(buttonIcon, buttonText);

  return button;
};

const createModal = (item) => {
  const el = document.createElement("div");
  el.className = "modal";

  const imageBox = document.createElement("div");
  imageBox.className = "modal-image-box";

  const menuImage = document.createElement("img");
  menuImage.className = "menu-image";
  menuImage.src = `./assets/images/${item.id}.png`;
  menuImage.alt = item.category;
  imageBox.append(menuImage);

  const itemDescr = document.createElement("div");
  itemDescr.className = "modal-item-descr";

  const descrText = document.createElement("div");
  descrText.className = "descr-text";
  const title = document.createElement("p");
  title.className = "descr-title";
  title.textContent = item.name;

  const descrInfo = document.createElement("p");
  descrInfo.className = "descr-info";
  descrInfo.textContent = item.description;
  descrText.append(title, descrInfo);

  const modalSize = document.createElement("div");
  modalSize.className = "size";
  const sizeTitle = document.createElement("p");
  sizeTitle.textContent = "Size";
  const sizeTabsContainer = document.createElement("div");
  sizeTabsContainer.className = "menu-tabs size-tabs";
  modalSize.append(sizeTitle, sizeTabsContainer);

  Object.entries(item.sizes).forEach(([key, value]) => {
    sizeTabsContainer.appendChild(createSizeTabs(key, value));
  });
  sizeTabsContainer.querySelector(".tab-item").classList.add("active");

  const modalAdditives = document.createElement("div");
  modalAdditives.className = "additives";
  const addTitle = document.createElement("p");
  addTitle.textContent = "Additives";
  const addTabsContainer = document.createElement("div");
  addTabsContainer.className = "menu-tabs additives-tabs";
  modalAdditives.append(addTitle, addTabsContainer);
  Object.entries(item.additives).forEach(([key, value]) => {
    addTabsContainer.appendChild(createAddTabs(key, value));
  });
  const modalTotal = document.createElement("div");
  modalTotal.className = "total";
  const totalTitle = document.createElement("span");
  totalTitle.textContent = "Total:";
  const price = document.createElement("p");
  price.className = "price";
  price.textContent = "$" + item.price;
  modalTotal.append(totalTitle, price);
  const alert = document.createElement("div");
  alert.className = "modal-alert";
  const alertIcon = document.createElement("div");
  alertIcon.className = "alert-icon";
  alertIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_147811_7961)">
    <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_147811_7961">
      <rect width="16" height="16" fill="white" />
    </clipPath>
  </defs>
</svg>`;
  const alertText = document.createElement("p");
  alertText.className = "alert-text";
  alertText.textContent =
    "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.";
  alert.append(alertIcon, alertText);
  const buttonClose = document.createElement("div");
  buttonClose.className = "button-close";
  buttonClose.textContent = "Close";
  buttonClose.addEventListener("click", () => {
    modalClose();
  });
  itemDescr.append(
    descrText,
    modalSize,
    modalAdditives,
    modalTotal,
    alert,
    buttonClose,
  );

  el.append(imageBox, itemDescr);
  let countPrice = Number(item.price);
  modalSize.querySelector(".menu-tabs").addEventListener("click", (e) => {
    if (e.target.closest(".tab-item")) {
      let activeTab = e.target.closest(".tab-item");
      let tabs = modalSize.querySelectorAll(".tab-item");
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      selectTab(activeTab);
      const size = activeTab.dataset.id;

      countPrice = Number(item.price) + Number(item.sizes[size]["add-price"]);

      price.textContent = "$" + countPrice.toFixed(2);
      const additivesTabs = modalAdditives.querySelectorAll(".tab-item");
      additivesTabs.forEach((tab) => tab.classList.remove("selected"));
    }
  });
  modalAdditives
    .querySelector(".additives-tabs")
    .addEventListener("click", (e) => {
      if (e.target.closest(".tab-item")) {
        let activeTab = e.target.closest(".tab-item");

        activeTab.classList.toggle("selected");
        const additive = activeTab.dataset.id;
        if (activeTab.classList.contains("selected")) {
          countPrice =
            countPrice + Number(item.additives[additive]["add-price"]);
        } else {
          countPrice =
            countPrice - Number(item.additives[additive]["add-price"]);
        }

        price.textContent = "$" + countPrice.toFixed(2);
      }
    });
  return el;
};

const modalShow = (item) => {
  modalWrapper.append(createModal(item));
  const modal = document.querySelector(".modal");
  modal.addEventListener("click", (event) => {
    event._isClickWithInMenu = true;
  });
  modalWrapper.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

const modalClose = () => {
  modalWrapper.classList.add("hidden");
  const modal = document.querySelector(".modal");
  modal.remove();
  document.body.style.overflow = "auto";
};

const menuItemsClickHandler = () => {
  document.querySelector(".menu-list").addEventListener("click", (e) => {
    if (e.target.closest(".menu-item")) {
      let activeItem = e.target.closest(".menu-item");

      modalShow(data[activeItem.dataset.id]);
    }
  });
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalClose();
  }
});
/*-----Menu button*/
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  console.log(menuItems);
  menuItems.forEach((item) => {
    item.style.display = "flex";
  });
  menuButton.style.display = "none";
});
