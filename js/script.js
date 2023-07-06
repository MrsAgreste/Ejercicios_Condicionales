// ------------------------------------ Primer ejercicio -------------------------------------------

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