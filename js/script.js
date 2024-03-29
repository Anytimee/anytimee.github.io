// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorALL("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    p;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + " ]").classList.add("active");
      });
    }
  });
  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

//   remove toggle icon and navbar when click navbar link
menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");

// Light mode
let lightModeIcon = document.querySelector("#lightMode-icon");

lightModeIcon.onclick = () => {
  lightModeIcon.classList.toggle("bx-moon");
};
