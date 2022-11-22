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

function save() {
    const rName = $("#rName").val();
    const fromName = $("#fromName").val();
    const toName = $("#toName").val();
    const descp = $("#big").val();
    const depar = $("#depar").val();
    const estArrival = $("#estArrival").val();
    const monday = document.getElementById("monday");
    const tuesday = document.getElementById("tuesday");
    const wednesday = document.getElementById("wednesday");
    const thursday = document.getElementById("thursday");
    const friday = document.getElementById("friday");
    const saturday = document.getElementById("saturday");
    const sunday = document.getElementById("sunday");
    let currentUser = localStorage.getItem("currentUser");
    const owner = currentUser;
  
    if (
      rName.length > 0 &&
      fromName.length > 0 &&
      toName.length > 0 &&
      depar.length > 0 &&
      estArrival.length > 0
    ) {
      if (descp == undefined) {
        descp = "Without description";
      }
      let ridesDb = JSON.parse(localStorage.getItem("rides"));
      if (!ridesDb) {
        ridesDb = [];
      }
      const ride = {
        rName: rName,
        fromName: fromName,
        toName: toName,
        descp: descp,
        depar: depar,
        estArrival: estArrival,
        monday: monday.checked,
        tuesday: tuesday.checked,
        wednesday: wednesday.checked,
        thursday: thursday.checked,
        friday: friday.checked,
        saturday: saturday.checked,
        sunday: sunday.checked,
        owner: owner,
        id: ridesDb.length + 1,
      };
      ridesDb.push(ride);
      localStorage.setItem("rides", JSON.stringify(ridesDb));
      console.log(JSON.parse(localStorage.getItem("rides")));
      location.href = "/anthony/homeworks/project2/dashboard";
    } else {
      alert("You must fill in all the data");
    }
  }