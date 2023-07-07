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

// -------------------------------- Quinto ejercicio --------------------------------------------

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

// -------------------------------- Sexto ejercicio --------------------------------------------

function Ejercicio6() {
  let num1 = document.getElementById("answer7").value;
  let num2 = document.getElementById("answer8").value;
  let num3 = document.getElementById("answer9").value;

  if (num1 == num2) {
    if (Math.max(num1, num3) == num1) {
      modal6.querySelector(".box").innerHTML =
        num1 + " es mayor que " + num3;
    }  else if (Math.max(num1, num3) == num3) {
      modal6.querySelector(".box").innerHTML = num3 + " es mayor que " + num1;
    }
  } else if (num2 == num3) {
    if (Math.max(num1, num2) == num1) {
      modal6.querySelector(".box").innerHTML = num1 + " es mayor que " + num2;
    } else if (Math.max(num1, num2) == num2) {
      modal6.querySelector(".box").innerHTML = num2 + " es mayor que " + num1;
    }
  } else if (num1 == num3) {
    if (Math.max(num1, num2) == num1) {
      modal6.querySelector(".box").innerHTML = num1 + " es mayor que " + num2;
    } else if (Math.max(num1, num2) == num2) {
      modal6.querySelector(".box").innerHTML = num2 + " es mayor que " + num1;
    }
  } else if (Math.max(num1, num2, num3) == num1) {
    modal6.querySelector(".box").innerHTML =
      num1 + " es mayor que " + num2 + " y " + num3;
  } else if (Math.max(num1, num2, num3) == num2) {
    modal6.querySelector(".box").innerHTML =
      num2 + " es mayor que " + num1 + " y " + num3;
  } else if (Math.max(num1, num2, num3) == num3) {
    modal6.querySelector(".box").innerHTML =
      num3 + " es mayor que " + num2 + " y " + num1;
  }

  document.getElementById("answer7").value = "";
  document.getElementById("answer8").value = "";
  document.getElementById("answer9").value = "";
};

function Ejercicio7() {
  let diaSemana = document.getElementById("answer10").value;
  switch (diaSemana) {
    case "lunes":
      modal7.querySelector(".box").innerHTML = "Ánimo! Es lunes de inspiración";
      break;
    case "viernes":
      modal7.querySelector(".box").innerHTML =
        "Resiste, ya casi es fin de semana y podrás descansar";
      break;
    case "sabado":
      modal7.querySelector(".box").innerHTML =
        "Descansa, pero no se te olvide hacer la compra de la despensa";
      break;
    case "domingo":
      modal7.querySelector(".box").innerHTML =
        "Descansa, pero no se te olvide hacer la compra de la despensa";
      break;
    case "martes":
      modal7.querySelector(".box").innerHTML = "Sonríe! :)";
      break;
    case "miercoles":
      modal7.querySelector(".box").innerHTML = "Sonríe! :)";
      break;
    case "jueves":
      modal7.querySelector(".box").innerHTML = "Sonríe! :)";
      break;
    default:
      modal7.querySelector(".box").innerHTML =
        "No escribió un dia valido, por favor vuelva a intentarlo";
      break;
  }
  document.getElementById("answer10").value = "";
};
function Ejercicio8() {
  let cal = document.getElementById("answer11").value;

  if (cal >= 1 && cal <= 6) {
    modal8.querySelector(".box").innerHTML = "Reprobado";
  } else if (cal > 6 && cal <= 8) {
    modal8.querySelector(".box").innerHTML = "Regular";
  } else if (cal == 9) {
    modal8.querySelector(".box").innerHTML = "Bien";
  } else if (cal == 10) {
    modal8.querySelector(".box").innerHTML = "Excelente";
  } else {
    modal8.querySelector(".box").innerHTML = "No escribió una calificación válida";
  }

  document.getElementById("answer11").value = "";

}