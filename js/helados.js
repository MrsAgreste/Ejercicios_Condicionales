    WebFont.load({
      google: {
        families: ["Cookie:regular"]
      }
    });

function imprimirCosto() {
  const opcionTopping = document.querySelector("#topping");
  let topping = opcionTopping.value;
  console.log(topping);

  let costoTopping = 0;
  let mensaje = "";

  switch (topping) {
    case "Sin Topping":
      costoTopping = 0;
      mensaje = "";
      break;
    case "Oreo":
      const oreoDisponible = document.getElementById("checkbox-1");
      let toppingOreo = "";
      if (oreoDisponible.checked) {
        toppingOreo = document.getElementById("checkbox-1").value;
        if (toppingOreo == "Oreo agotado") {
          costoTopping = 0;
          mensaje =
            "Lamentablemente tenemos el " + toppingOreo +
            " por lo cual se le dará un helado sin topping, que cuesta $50";
        };
      } else {
        costoTopping = 10;
      }
      break;
    case "Kitkat":
      const kitkatDisponible = document.getElementById("checkbox-2");
      let toppingKitkat = "";

      if (kitkatDisponible.checked) {
        toppingKitkat = document.getElementById("checkbox-2").value;
        if (toppingKitkat == "Kitkat agotado") {
          costoTopping = 0;
          mensaje =
            "Lamentablemente tenemos el " + toppingKitkat +
            " por lo cual se le dará un helado sin topping, que cuesta $50";
        }
      } else {
        costoTopping = 15;
      }
      break;
    case "Brownie":
      const brownieDisponible = document.getElementById("checkbox-3");
      let toppingBrownie = "";
      if (brownieDisponible.checked) {
        toppingBrownie = document.getElementById("checkbox-3").value;
        if (toppingBrownie == "Brownie agotado") {
          costoTopping = 0;
          mensaje =
            "Lamentablemente tenemos el " + toppingBrownie +
            " por lo cual se le dará un helado sin topping, que cuesta $50";
        }
      } else {
        costoTopping = 20;
      }
      break;
  }

  let costoTotal = costoTopping + 50;

  if (mensaje == "") {
    if (costoTotal == 50) {
      document.querySelector(".box").innerHTML =
        "El helado " + topping + " cuesta $" + costoTotal;
    } else {
      document.querySelector(".box").innerHTML =
        "El helado con topping de " + topping + " cuesta $" + costoTotal + ". ";
    }
  } else if (mensaje != "") {
    document.querySelector(".box").innerHTML = mensaje;
  }

}
