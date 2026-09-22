"use strict";

const themeDarkBTN = document.querySelector(".theme-dark");
const themeLightBTN = document.querySelector(".theme-light");

const currentTheme = localStorage.getItem("theme");
if (currentTheme){
document.documentElement.setAttribute("data-theme", currentTheme);
   if (currentTheme === "light"){
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
