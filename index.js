"use strict";

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
