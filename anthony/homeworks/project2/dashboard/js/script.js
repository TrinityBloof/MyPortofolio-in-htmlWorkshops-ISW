let header = document.querySelector("#header");
let footer = document.querySelector("#footer");

fetch("/anthony/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });

window.addEventListener("load", () => {
  let currentUser = localStorage.getItem("currentUser");
  const rName = localStorage.getItem("rName");
  const fromName = localStorage.getItem("fromName");
  const toName = localStorage.getItem("toName");
  const descp = localStorage.getItem("descp");
  const depar = localStorage.getItem("depar");
  const estArrival = localStorage.getItem("estArrival");
  const monday = localStorage.getItem("monday");
  const tuesday = localStorage.getItem("tuesday");
  const wednesday = localStorage.getItem("wednesday");
  const thursday = localStorage.getItem("thursday");
  const friday = localStorage.getItem("friday");
  const saturday = localStorage.getItem("saturday");
  const sunday = localStorage.getItem("sunday");

  if (!currentUser) {
    currentUser = "";
  }

  if (currentUser == "") {
    fetch("/anthony/homeworks/project2/header.html")
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
    fetch("/anthony/homeworks/project2/header_login.html")
      .then((res) => res.text())
      .then((data) => {
        header.innerHTML = data;
        $("#nameUser").html(currentUser);
        let menuBtn = document.querySelector("#menu-btn");
        let navbar = document.querySelector(".header .flex .navbar");

        menuBtn.onclick = () => {
          menuBtn.classList.toggle("fa-times");
          navbar.classList.toggle("active");
        };

        function logout() {
          localStorage.setItem("currentUser", "");
          window.location.href = "/anthony/homeworks/project2";
        }

        $("#logout").bind("click", function () {
          logout();
        });
      });
  }

  document.getElementById("viewRideName").value = rName;
  document.getElementById("fromName").value = fromName;
  document.getElementById("toName").value = toName;
  document.getElementById("big").value = descp;
  document.getElementById("depar").value = depar;
  document.getElementById("estArrival").value = estArrival;

  if (monday == "true") {
    document.getElementById("monday").checked = true;
  }
  if (tuesday == "true") {
    document.getElementById("tuesday").checked = true;
  }
  if (wednesday == "true") {
    document.getElementById("wednesday").checked = true;
  }
  if (thursday == "true") {
    document.getElementById("thursday").checked = true;
  }
  if (friday == "true") {
    document.getElementById("friday").checked = true;
  }
  if (saturday == "true") {
    document.getElementById("saturday").checked = true;
  }
  if (sunday == "true") {
    document.getElementById("sunday").checked = true;
  }
});

function showListOfRides() {
  const rides = JSON.parse(localStorage.getItem("rides"));
  const table = document.getElementById("rides_table");

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
  let rides = JSON.parse(localStorage.getItem("rides"));
  let rideFound;
  rides.forEach(function (ride) {
    if (ride.id == dataObj.id) {
      rideFound = ride;
      return;
    }
  });

  localStorage.setItem("rName", rideFound.rName);
  localStorage.setItem("fromName", rideFound.fromName);
  localStorage.setItem("toName", rideFound.toName);
  localStorage.setItem("descp", rideFound.descp);
  localStorage.setItem("depar", rideFound.depar);
  localStorage.setItem("estArrival", rideFound.estArrival);
  localStorage.setItem("monday", rideFound.monday);
  localStorage.setItem("tuesday", rideFound.tuesday);
  localStorage.setItem("wednesday", rideFound.wednesday);
  localStorage.setItem("thursday", rideFound.thursday);
  localStorage.setItem("friday", rideFound.friday);
  localStorage.setItem("saturday", rideFound.saturday);
  localStorage.setItem("sunday", rideFound.sunday);

  if (currentUser == "") {
    window.location.href = "norides_view.html";
  } else {
    window.location.href = "rides_view.html";
  }
}

showListOfRides();