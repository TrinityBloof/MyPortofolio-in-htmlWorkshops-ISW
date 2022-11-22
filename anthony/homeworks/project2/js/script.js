let header = document.querySelector("#header");
let footer = document.querySelector("#footer");

window.addEventListener("load", () => {
  let currentUser = localStorage.getItem("currentUser");

  if(!currentUser) {
    currentUser = "";
  }

  if (currentUser == "") {
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
  } else {
    fetch("header_login.html")
    .then((res) => res.text())
    .then((data) => {
      header.innerHTML = data;
      $('#nameUser').html(currentUser);
      let menuBtn = document.querySelector("#menu-btn");
      let navbar = document.querySelector(".header .flex .navbar");

      menuBtn.onclick = () => {
        menuBtn.classList.toggle("fa-times");
        navbar.classList.toggle("active");
      };

      function logout() {
        window.location.href = '/anthony/homeworks/project2';
      }
      
      $('#logout').bind('click', function(){
        logout();
      });
    });
  }
});

fetch("/anthony/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
});

function loadFrom(){
  const froms = JSON.parse(localStorage.getItem('rides'));

  if(froms) {
    let options = "";
    froms.forEach((ride) => {
      options += `<option value="${ride.id}">${ride.fromName}</option>`;
    })
    document.getElementById('from-list').innerHTML = options;
  }
}

function loadTo(){
  const tos = JSON.parse(localStorage.getItem('rides'));

  if(tos) {
    let options = "";
    tos.forEach((ride) => {
      options += `<option value="${ride.id}">${ride.toName}</option>`;
    })
    document.getElementById('to-list').innerHTML = options;
  }
}

function showListOfRides() {
  const rides = JSON.parse(localStorage.getItem('rides'));
  const table = document.getElementById('rides_table');

  if (rides) {
    let rows = "";
    rides.forEach((ride, index) => {
      let row = `<tr>`;
      row += `<td>${ride.rName}</td>`;
      row += `<td>${ride.fromName}</td>`;
      row += `<td>${ride.toName}</td>`;
      row += `<td> <a onclick="viewEntity(this)" data-id="${ride.id}" class="link view" href="#">View</a> </td>`;
      rows += row + "</tr>";
    });
    table.innerHTML = rows;
  }
}

function viewEntity(element) {
  let currentUser = localStorage.getItem("currentUser");
  const dataObj = jQuery(element).data();
    let rides = JSON.parse(localStorage.getItem('rides'));
    let rideFound;
    rides.forEach(function (ride) {
      if (ride.id == dataObj.id) {
        rideFound = ride;
        return;
      }
    });

    localStorage.setItem('rName', rideFound.rName);
    localStorage.setItem('fromName', rideFound.fromName);
    localStorage.setItem('toName', rideFound.toName);
    localStorage.setItem('descp', rideFound.descp);
    localStorage.setItem('depar', rideFound.depar);
    localStorage.setItem('estArrival', rideFound.estArrival);
    localStorage.setItem('monday', rideFound.monday);
    localStorage.setItem('tuesday', rideFound.tuesday);
    localStorage.setItem('wednesday', rideFound.wednesday);
    localStorage.setItem('thursday', rideFound.thursday);
    localStorage.setItem('friday', rideFound.friday);
    localStorage.setItem('saturday', rideFound.saturday);
    localStorage.setItem('sunday', rideFound.sunday);

  if (currentUser == "") {
    window.location.href = 'dashboard/norides_view.html';
  } else {
    window.location.href = 'dashboard/rides_view.html';
  }
}

function findRides() {
  const from = $("#from-list option:selected").text();
  const to = $("#to-list option:selected").text();
  const arrRides = JSON.parse(window.localStorage.getItem('rides'));

  for (let i = 0; i < arrRides.length; i++) {
    if (arrRides[i].fromName == from && arrRides[i].toName == to) {
      const table = document.getElementById('rides_table');
      let rows = "";

      let row = `<tr>`;
      row += `<td>${arrRides[i].rName}</td>`;
      row += `<td>${arrRides[i].fromName}</td>`;
      row += `<td>${arrRides[i].toName}</td>`;
      row += `<td> <a onclick="viewEntity(this)" data-id="${arrRides[i].id}" class="link view" href="#">View</a> </td>`;
      rows += row + "</tr>";

      table.innerHTML = rows;
    }
  }
}

$('#findRides').bind('click', function(){
  findRides();
});

showListOfRides();
loadFrom();
loadTo();