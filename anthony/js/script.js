let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
let home = document.querySelector('#home');
let about = document.querySelector('#about');
let footer = document.querySelector("#footer");

fetch('home.html').then(res=>res.text()).then(data=>{
    home.innerHTML=data;
});

fetch('about.html').then(res=>res.text()).then(data=>{
    about.innerHTML=data;
});

fetch("/anthony/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
});

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}