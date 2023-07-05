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

// --------------------------------- Cuarto ejercicio ----------------------------------------------

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

function Ejercicio4() {
  let num = document.getElementById("answer4").value;
  let numero = Number(num);

  if (numero === 1000) {
    modal4.querySelector(".box").innerHTML = "Felicidades! Ganaste un premio";
  } else {
    modal4.querySelector(".box").innerHTML = "Lo sentimos, sigue participando";
  }
  document.getElementById("answer4").value = "";
}

// --------------------------------- Quinto ejercicio ----------------------------------------------

let openModal5 = document.getElementById("openModal5");
let modal5 = document.getElementById("mE5");
let closeModal5 = document.getElementById("close5");

openModal5.onclick = function () {
  modal5.querySelector(".input-box label").style.transition = ".5s";
  modal5.style.visibility = "visible";
};
closeModal5.onclick = function () {
  modal5.querySelector(".input-box label").style.transition = "0s";
  modal5.querySelector(".box").innerHTML = "";
  modal5.style.visibility = "hidden";
};

function Ejercicio5() {
  let num1 = document.getElementById("answer5").value;
  let num2 = document.getElementById("answer6").value;

  if (Math.min(num1,num2) == num1) {
    modal5.querySelector(".box").innerHTML = "El primer numero es menor porque "+num1+" es menor que "+num2;
  }
  else if (Math.min(num1,num2) == num2) {
    modal5.querySelector(".box").innerHTML = "El segundo numero es menor porque "+num2+" es menor que "+num1;
  }

  document.getElementById("answer5").value = "";
  document.getElementById("answer6").value = "";
}