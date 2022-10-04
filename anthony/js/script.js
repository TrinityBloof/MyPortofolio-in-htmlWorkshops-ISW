let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
let home = document.querySelector('#home');
let about = document.querySelector('#about');

fetch('home.html').then(res=>res.text()).then(data=>{
    home.innerHTML=data;
});

fetch('about.html').then(res=>res.text()).then(data=>{
    about.innerHTML=data;
});

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}