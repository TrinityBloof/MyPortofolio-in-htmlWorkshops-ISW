let header = document.querySelector("#header");
let footer = document.querySelector("#footer");

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

fetch("/anthony/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });

function addUser() {
  const fName = $("#fName").val();
  const lName = $("#lName").val();
  const phone = $("#phone").val();
  const userN = $("#userN").val();
  const pass = $("#pass").val();
  const rPass = $("#rPass").val();

  if (
    fName.length > 0 &&
    lName.length > 0 &&
    phone.length > 0 &&
    pass.length > 0 &&
    rPass.length > 0 &&
    userN.length > 0
  ) {
    if (pass == rPass) {
      let usersDb = JSON.parse(localStorage.getItem("users"));
      if (!usersDb) {
        usersDb = [];
      }
      const user = {
        fName: fName,
        lName: lName,
        phone: phone,
        userN: userN,
        pass: pass,
        rPass: rPass,
        fullName: fName + " " + lName,
        speedAvg: "60 km/h",
        aboutMe: "Any",
        id: usersDb.length + 1,
      };
      usersDb.push(user);
      localStorage.setItem("users", JSON.stringify(usersDb));
      console.log(JSON.parse(localStorage.getItem("users")));
      location.href = "/anthony/homeworks/project2/login/index.html";
    } else {
      alert("The password does not match");
    }
  } else {
    alert("You must fill in all the data");
  }
}

function login() {
  const userN = document.getElementById("userN").value;
  const pass = document.getElementById("pass").value;
  const arrUsers = JSON.parse(window.localStorage.getItem("users"));
  let log = 0;

  if (arrUsers == null) {
    alert("There is no data in the system yet");
  } else {
    for (let i = 0; i < arrUsers.length; i++) {
      if (arrUsers[i].userN == userN && arrUsers[i].pass == pass) {
        localStorage.setItem("currentUser", arrUsers[i].userN);
        localStorage.setItem("currentFullName", arrUsers[i].fullName);
        localStorage.setItem("currentAvg", arrUsers[i].speedAvg);
        localStorage.setItem("currentDescp", arrUsers[i].aboutMe);
        log = 1;
      }
    }
    if (log == 1) {
      window.location.href = "/anthony/homeworks/project2";
    } else {
      alert("The user or password is incorrect");
    }
  }
}

$("#add-user-button").bind("click", function () {
  addUser();
});
$("#login-user-button").bind("click", function () {
  login();
});
