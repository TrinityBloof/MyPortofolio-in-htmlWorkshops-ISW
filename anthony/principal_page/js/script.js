let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
let footer = document.querySelector("#footer");

fetch("/anthony/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
});

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}