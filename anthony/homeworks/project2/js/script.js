let header = document.querySelector("#header");
let header_login = document.querySelector("#header_login");
let footer = document.querySelector("#footer");

fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
    let menuBtn = document.querySelector("#menu-btn");
    let navbar = document.querySelector(".header .flex .navbar");

    menuBtn.onclick = () => {
      menuBtn.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    };
});

fetch("header_login.html")
  .then((res) => res.text())
  .then((data) => {
    header_login.innerHTML = data;
    let menuBtn = document.querySelector("#menu-btn");
    let navbar = document.querySelector(".header_login .flex .navbar");

    menuBtn.onclick = () => {
      menuBtn.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    };
});

fetch("/anthony/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
});