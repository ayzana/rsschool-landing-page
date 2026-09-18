"use strict";

const themeBTN = document.querySelector(".theme");

themeBTN.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = "light";
  if (currentTheme === "light") newTheme = "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", currentTheme);
});
