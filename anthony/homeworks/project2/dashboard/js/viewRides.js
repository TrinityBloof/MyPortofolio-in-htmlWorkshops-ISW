let header = document.querySelector("#header");
let footer = document.querySelector("#footer");

fetch("/anthony/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });

window.addEventListener("load", () => {
  let currentUser = localStorage.getItem("currentUser");

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
});

function showListOfRides() {
  const rides = JSON.parse(localStorage.getItem("rides"));
  const table = document.getElementById("rides_table");
  let currentUser = localStorage.getItem("currentUser");

  if (rides) {
    let rows = "";
    rides.forEach((ride, index) => {
      if (ride.owner == currentUser) {
        let row = `<tr>`;
        row += `<td>${ride.rName}</td>`;
        row += `<td>${ride.fromName}</td>`;
        row += `<td>${ride.toName}</td>`;
        row += `<td> <a onclick="editEntity(this)" data-id="${ride.id}" class="link edit" href="#">Edit</a>   |  <a  onclick="deleteEntity(this);" data-id="${ride.id}" class="link delete" href="#">Delete</a>  </td>`;
        rows += row + "</tr>";
      }
    });
    table.innerHTML = rows;
  }
}

function editEntity(element) {
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
  localStorage.setItem("rId", rideFound.id);
  window.location.href = "rides_edit.html";
}

function deleteEntity(element) {

    if (confirm('Are you sure you want to delete?')) {
      const dataObj = jQuery(element).data();

      let rides = JSON.parse(localStorage.getItem('rides'));
      let results = rides.filter(ride => ride.id != dataObj.id);
      localStorage.setItem('rides', JSON.stringify(results));
      showListOfRides();
    }
  }

showListOfRides();
