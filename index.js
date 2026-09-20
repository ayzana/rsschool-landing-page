"use strict";

const themeDarkBTN = document.querySelector(".theme-dark");
const themeLightBTN = document.querySelector(".theme-light");

themeDarkBTN.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = "light";
  if (currentTheme === "light") newTheme = "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  themeDarkBTN.classList.add("active");
  themeLightBTN.classList.remove("active");
  localStorage.setItem("theme", currentTheme);
});

themeLightBTN.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = "light";
  if (currentTheme === "light") newTheme = "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  themeLightBTN.classList.add("active");
  themeDarkBTN.classList.remove("active");
  localStorage.setItem("theme", currentTheme);
});
