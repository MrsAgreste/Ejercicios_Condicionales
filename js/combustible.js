function CalcularCosto() {
    const transporte = document.getElementById("transporte").value;
    const litros = document.getElementById("litros").value;
    const km = document.getElementById("kilometros").value;

    let precioKm = 0;
    let extra = 0;

    switch(transporte) {
        case "moto":
            precioKm = 0.1;
            break;
        case "carro":
            precioKm = 0.2;
            break;
        case "bus":
            precioKm = 0.5;
            break;
    };
    if (litros > 0 && litros < 100) {
        extra = 5;
    } else if (litros > 100) {
        extra = 10;
    }

    let costoTotal = Math.round((precioKm * km) + extra);

    document.querySelector(".box").innerHTML = "El costo total es de "+costoTotal+" dólares."

    document.querySelector("#litros").value = "";
    document.querySelector("#kilometros").value = "";
};