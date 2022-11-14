let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function toggleClock() {
    const ok = document.getElementById('ok');
    const x = document.getElementById('x');
    const ok2 = document.getElementById('ok2');
    const x2 = document.getElementById('x2');
    const ok3 = document.getElementById('ok3');
    const x3 = document.getElementById('x3');
    const ok4 = document.getElementById('ok4');
    const x4 = document.getElementById('x4');
    const ok5 = document.getElementById('ok5');
    const x5 = document.getElementById('x5');
    const ok6 = document.getElementById('ok6');
    const x6 = document.getElementById('x6');
    const ok7 = document.getElementById('ok7');
    const x7 = document.getElementById('x7');
    const ok8 = document.getElementById('ok8');
    const x8 = document.getElementById('x8');
    const ok9 = document.getElementById('ok9');
    const x9 = document.getElementById('x9');
    const ok10 = document.getElementById('ok10');
    const x10 = document.getElementById('x10');
    ok.style.display = 'none';
    x.style.display = 'none';
    ok2.style.display = 'none';
    x2.style.display = 'none';
    ok3.style.display = 'none';
    x3.style.display = 'none';
    ok4.style.display = 'none';
    x4.style.display = 'none';
    ok5.style.display = 'none';
    x5.style.display = 'none';
    ok6.style.display = 'none';
    x6.style.display = 'none';
    ok7.style.display = 'none';
    x7.style.display = 'none';
    ok8.style.display = 'none';
    x8.style.display = 'none';
    ok9.style.display = 'none';
    x9.style.display = 'none';
    ok10.style.display = 'none';
    x10.style.display = 'none';
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;
    const q5 = document.getElementById('q5').value;
    const q6 = document.getElementById('q6').value;
    const q7 = document.getElementById('q7').value;
    const q8 = document.getElementById('q8').value;
    const q9 = document.getElementById('q9').value;
    const q10 = document.getElementById('q10').value;
    let total = 0;

    if (q1.toLowerCase() === "working") {
        ok.style.display = 'block';
        total+=1;
    } else {
        x.style.display = 'block';
    }

    if (q2.toLowerCase() === "smoking") {
        ok2.style.display = 'block';
        total+=1;
    } else {
        x2.style.display = 'block';
    }

    if (q3.toLowerCase() === "to study") {
        ok3.style.display = 'block';
        total+=1;
    } else {
        x3.style.display = 'block';
    }

    if (q4.toLowerCase() === "to take") {
        ok4.style.display = 'block';
        total+=1;
    } else {
        x4.style.display = 'block';
    }

    if (q5.toLowerCase() === "eating") {
        ok5.style.display = 'block';
        total+=1;
    } else {
        x5.style.display = 'block';
    }

    if (q6.toLowerCase() === "working") {
        ok6.style.display = 'block';
        total+=1;
    } else {
        x6.style.display = 'block';
    }

    if (q7.toLowerCase() === "meeting") {
        ok7.style.display = 'block';
        total+=1;
    } else {
        x7.style.display = 'block';
    }

    if (q8.toLowerCase() === "cooking") {
        ok8.style.display = 'block';
        total+=1;
    } else {
        x8.style.display = 'block';
    }

    if (q9.toLowerCase() === "to learn") {
        ok9.style.display = 'block';
        total+=1;
    } else {
        x9.style.display = 'block';
    }

    if (q10.toLowerCase() === "to go") {
        ok10.style.display = 'block';
        total+=1;
    } else {
        x10.style.display = 'block';
    }

    let cadena = "Total: " + total;
    document.getElementById('total').innerHTML = cadena+"/10";
  }