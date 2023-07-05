// ------------------------------------ Pimer ejercicio -------------------------------------------

let openModal1 = document.getElementById("openModal1");
let modal1 = document.getElementById("mE1");
let closeModal1 = document.getElementById("close1");

openModal1.onclick = function() {
  modal1.querySelector(".input-box label").style.transition = ".5s";
    modal1.style.visibility = "visible"; }
closeModal1.onclick = function() {
    modal1.querySelector(".input-box label").style.transition = "0s";
    document.querySelector("#box1").innerHTML = "";
    modal1.style.visibility = "hidden";}

function Ejercicio1() {
    let respuesta = document.getElementById("answer1").value;
    let confirmacion = "Ciertamente";
    let negacion = "No lo creo";

    if (respuesta == "si" || respuesta == "sip") {
      document.querySelector("#box1").innerHTML = confirmacion;
    }  else  {
      document.querySelector("#box1").innerHTML = negacion;
    }

    document.getElementById("answer1").value = "";
}

// --------------------------------  Segundo ejercicio -----------------------------------------

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

function Ejercicio2() {
  let num = document.getElementById("answer2").value;
  let numero = Number(num);
  let msj1 = "Correcto! El numero " + numero + " es divisible entre 2";
  let msj2 = "Incorrecto, el numero " + numero + " no es divisible entre 2";

    if ((numero % 2) == 0) {
      modal2.querySelector(".box").innerHTML = msj1;
    } else {
      modal2.querySelector(".box").innerHTML = msj2;
    }
    document.getElementById("answer2").value = "";
  }

// --------------------------------- Tercer ejercicio ----------------------------------------------

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

function Ejercicio3() {
  let num = document.getElementById("answer3").value;
  let numero = Number(num);

  if (numero % 2 != 0) {
    swal("Correcto! El numero " + numero + " es impar");
  } else {
    swal("Incorrecto, el numero " + numero + " no es impar");
  }
  document.getElementById("answer3").value = "";
}