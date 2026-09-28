"use strict";

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
/* ------Slider ----*/

let position = 0;
let slideWidth = 160;
let currentIndex = 0;
const slidersCount = 3;

const slider = document.querySelector(".slider-list");
const sliderItems = document.querySelectorAll(".slider-item");
const nextBTN = document.querySelector(".slider-button_right");
const prevBTN = document.querySelector(".slider-button_left");
const controls = document.querySelectorAll(".controls-item");

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  controls.forEach((el, index) => {
    el.classList.toggle("active", index === currentIndex);
  });
}

nextBTN.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slidersCount;
  updateSlider();
});
prevBTN.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slidersCount) % slidersCount;
  updateSlider();
});
