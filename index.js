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
const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slidersCount;
  updateSlider();
};
const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slidersCount) % slidersCount;
  updateSlider();
};

nextBTN.addEventListener("click", () => {
  nextSlide();
});
prevBTN.addEventListener("click", () => {
  nextSlide();
});

let startX = 0;
let currentX = 0;
let diffX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  currentX = e.touches[0].clientX;
  diffX = startX - currentX;
});

slider.addEventListener("touchend", () => {
  const threshold = 50;

  if (diffX > threshold) {
    nextSlide();
  } else if (diffX < -threshold) {
    prevSlide();
  }

  startX = 0;
  diffX = 0;
});
