let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
let my_url = "dogs";
let my_url2 = "/anthony/homeworks/4/cats";

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.getElementById("btn").onclick = function() {
    window.location.replace(my_url);
}

document.getElementById("btn2").onclick = function() {
    window.location.replace(my_url2);
}