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

function saveRides() {
  const rName = $("#viewRideName").val();
  const fromName = $("#fromName").val();
  const toName = $("#toName").val();
  const descp = $("#big").val();
  const depar = $("#depar").val();
  const estArrival = $("#estArrival").val();
  const monday2 = document.getElementById("monday");
  const tuesday2 = document.getElementById("tuesday");
  const wednesday2 = document.getElementById("wednesday");
  const thursday2 = document.getElementById("thursday");
  const friday2 = document.getElementById("friday");
  const saturday2 = document.getElementById("saturday");
  const sunday2 = document.getElementById("sunday");
  let id = localStorage.getItem("rId");
  const arrRides = JSON.parse(window.localStorage.getItem("rides"));

  for (let i = 0; i < arrRides.length; i++) {
    if (arrRides[i].id == id) {
      let owner = arrRides[i].owner;
      let id = arrRides[i].id;
      let monday = monday2.checked;
      let tuesday = tuesday2.checked;
      let wednesday = wednesday2.checked;
      let thursday = thursday2.checked;
      let friday = friday2.checked;
      let saturday = saturday2.checked;
      let sunday = sunday2.checked;

      const ride = {
        rName,
        fromName,
        toName,
        descp,
        depar,
        estArrival,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        owner,
        id,
      };
      let rides = JSON.parse(localStorage.getItem("rides"));
      let results = rides.filter((ride) => ride.id != id);
      results.push(ride);
      localStorage.setItem("rides", JSON.stringify(results));

      localStorage.setItem("rName", rName);
      localStorage.setItem("fromName", fromName);
      localStorage.setItem("toName", toName);
      localStorage.setItem("descp", descp);
      localStorage.setItem("depar", depar);
      localStorage.setItem("estArrival", estArrival);
      localStorage.setItem("monday", monday);
      localStorage.setItem("tuesday", tuesday);
      localStorage.setItem("wednesday", wednesday);
      localStorage.setItem("thursday", thursday);
      localStorage.setItem("friday", friday);
      localStorage.setItem("saturday", saturday);
      localStorage.setItem("sunday", sunday);
      window.location.href = "/anthony/homeworks/project2/dashboard";
    }
  }
}
