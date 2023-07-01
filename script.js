let openModal1 = document.getElementById("openModal1");
let modal1 = document.getElementById("mE1");
let closeModal1 = document.getElementById("close1");

openModal1.onclick = function() {
    modal1.style.visibility = "visible"; }
closeModal1.onclick = function() {
    document.querySelector(".input-box label").style.transition = "0s";
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