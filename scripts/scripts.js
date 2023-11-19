const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".mobile");
const navBar = document.querySelector("nav");
const mobileMenu = document.querySelector(".mobile");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("active")) {
    hamburger.classList.remove("active");
    hamburger.classList.add("inactive");
    navigation.classList.remove("active");
    navBar.classList.remove("active");
  } else {
    hamburger.classList.remove("inactive");
    hamburger.classList.add("active");
    navigation.classList.add("active");
    navBar.classList.add("active");
  }
});
