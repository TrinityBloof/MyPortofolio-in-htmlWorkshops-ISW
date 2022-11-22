let header = document.querySelector("#header");
let footer = document.querySelector("#footer");

function showSettings() {
  const currentFullName = localStorage.getItem("currentFullName");
  const currentAvg = localStorage.getItem("currentAvg");
  const currentDescp = localStorage.getItem("currentDescp");

  document.getElementById("currentFullName").value = currentFullName;
  document.getElementById("currentAvg").value = currentAvg;
  document.getElementById("big").value = currentDescp;
}

function saveSettings() {
  const fullName = $("#currentFullName").val();
  const speedAvg = $("#currentAvg").val();
  const aboutMe = $("#big").val();
  let currentUser = localStorage.getItem("currentUser");
  const arrUsers = JSON.parse(window.localStorage.getItem("users"));

  for (let i = 0; i < arrUsers.length; i++) {
    if (arrUsers[i].userN == currentUser) {
      let fName = arrUsers[i].fName;
      let lName = arrUsers[i].lName;
      let phone = arrUsers[i].phone;
      let userN = arrUsers[i].userN;
      let pass = arrUsers[i].pass;
      let rPass = arrUsers[i].rPass;
      let id = arrUsers[i].id;

      const user = {
        fName,
        lName,
        phone,
        userN,
        pass,
        rPass,
        fullName,
        speedAvg,
        aboutMe,
        id,
      };
      let users = JSON.parse(localStorage.getItem("users"));
      let results = users.filter(user => user.id != id);
      results.push(user);
      localStorage.setItem("users", JSON.stringify(results));
    }
  }

  localStorage.setItem("currentFullName", fullName);
  localStorage.setItem("currentAvg", speedAvg);
  localStorage.setItem("currentDescp", aboutMe);
  window.location.href = "/anthony/homeworks/project2/dashboard";
}

showSettings();

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
