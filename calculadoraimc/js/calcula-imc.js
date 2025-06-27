var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValido = true;

    if (peso <= 0 || peso >= 635) {
        console.log("Peso Inválido")
        pesoEhValido = false;
    }

    if (altura <= 0 || altura >= 2.55) {
        console.log("Altura Inválida!")
        alturaEhValido = false;
    }

    if (pesoEhValido && alturaEhValido) {
        tdImc.textContent = calculaImc(peso, altura);
    } else {
        tdImc.textContent = "Peso e/ou altura inválidos!"
    }

    console.log(tdPeso.textContent);
    console.log(tdAltura.textContent);

    console.log(paciente);


}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = (peso / (altura * altura))
    return imc.toFixed(2);
}

