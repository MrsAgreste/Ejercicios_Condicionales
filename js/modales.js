// ------------------ Primer modal --------------------------

let openModal1 = document.getElementById("openModal1");
let modal1 = document.getElementById("mE1");
let closeModal1 = document.getElementById("close1");

openModal1.onclick = function () {
  modal1.querySelector(".input-box label").style.transition = ".5s";
  modal1.style.visibility = "visible";
};
closeModal1.onclick = function () {
  modal1.querySelector(".input-box label").style.transition = "0s";
  document.querySelector("#box1").innerHTML = "";
  modal1.style.visibility = "hidden";
};

// ------------------ Segundo modal --------------------------

let openModal2 = document.getElementById("openModal2");
let modal2 = document.getElementById("mE2");
let closeModal2 = document.getElementById("close2");

openModal2.onclick = function () {
  modal2.querySelector(".input-box label").style.transition = ".5s";
  modal2.style.visibility = "visible";
};
closeModal2.onclick = function () {
  modal2.querySelector(".input-box label").style.transition = "0s";
  modal2.querySelector(".box").innerHTML = "";
  modal2.style.visibility = "hidden";
};

// ------------------ Tercer modal --------------------------

let openModal3 = document.getElementById("openModal3");
let modal3 = document.getElementById("mE3");
let closeModal3 = document.getElementById("close3");

openModal3.onclick = function () {
  modal3.querySelector(".input-box label").style.transition = ".5s";
  modal3.style.visibility = "visible";
};
closeModal3.onclick = function () {
  modal3.querySelector(".input-box label").style.transition = "0s";
  modal3.querySelector(".box").innerHTML = "";
  modal3.style.visibility = "hidden";
};

// ------------------ Cuarto modal --------------------------

let openModal4 = document.getElementById("openModal4");
let modal4 = document.getElementById("mE4");
let closeModal4 = document.getElementById("close4");

openModal4.onclick = function () {
  modal4.querySelector(".input-box label").style.transition = ".5s";
  modal4.style.visibility = "visible";
};
closeModal4.onclick = function () {
  modal4.querySelector(".input-box label").style.transition = "0s";
  modal4.querySelector(".box").innerHTML = "";
  modal4.style.visibility = "hidden";
};

// ------------------ Quitno modal --------------------------

let openModal5 = document.getElementById("openModal5");
let modal5 = document.getElementById("mE5");
let closeModal5 = document.getElementById("close5");
let labels5 = modal5.querySelectorAll(".input-box label");

openModal5.onclick = function () {
  labels5.forEach(element => {
    element.style.transition = ".5s";
  });
  modal5.style.visibility = "visible";
};
closeModal5.onclick = function () {
    labels5.forEach((element) => {
      element.style.transition = "0s";
    });
  modal5.querySelector(".box").innerHTML = "";
  modal5.style.visibility = "hidden";
};

// ------------------ Sexto modal --------------------------

let openModal6 = document.getElementById("openModal6");
let modal6 = document.getElementById("mE6");
let closeModal6 = document.getElementById("close6");
let labels6 = modal6.querySelectorAll(".input-box label");

openModal6.onclick = function () {
      labels6.forEach((element) => {
        element.style.transition = ".5s";
      });
  modal6.style.visibility = "visible";
};
closeModal6.onclick = function () {
      labels6.forEach((element) => {
        element.style.transition = "0s";
      });
  modal6.querySelector(".box").innerHTML = "";
  modal6.style.visibility = "hidden";
};

// -------------------------- Septimo modal ---------..................-----------------
let openModal7 = document.getElementById("openModal7");
let modal7 = document.getElementById("mE7");
let closeModal7 = document.getElementById("close7");

openModal7.onclick = function () {
  modal7.querySelector(".input-box label").style.transition = ".5s";
  modal7.style.visibility = "visible";
};
closeModal7.onclick = function () {
  modal7.querySelector(".input-box label").style.transition = "0s";
  modal7.querySelector(".box").innerHTML = "";
  modal7.style.visibility = "hidden";
};
// ------------------------- Octavo modal ------------------------------------
let openModal8 = document.getElementById("openModal8");
let modal8 = document.getElementById("mE8");
let closeModal8 = document.getElementById("close8");

openModal8.onclick = function () {
  modal8.querySelector(".input-box label").style.transition = ".5s";
  modal8.style.visibility = "visible";
};
closeModal8.onclick = function () {
  modal8.querySelector(".input-box label").style.transition = "0s";
  modal8.querySelector(".box").innerHTML = "";
  modal8.style.visibility = "hidden";
};
// ------------------ Primer modal --------------------------