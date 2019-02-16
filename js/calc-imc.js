var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes");

for (i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    
    if(pesoEhValido && alturaEhValida){
        tdImc.textContent = calcularImc(altura, peso);
    }
    else if(!pesoEhValido){
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add('campo-invalido')
    }
    else if(!alturaEhValida){
        tdImc.textContent = "Alura Inválida";
        paciente.classList.add('campo-invalido')
    }

}

function calcularImc(altura, peso){
    var imc = peso / (altura * altura);
    imc = imc.toFixed(2);
    return imc;
}

function validaPeso(peso){
    var validaPeso = peso <= 0 || peso >= 400 ? validaPeso = false : validaPeso = true;
    return validaPeso; 
}

function validaAltura(altura){
    var validaAltura = altura <= 0 || altura >= 2.50 ? validaAltura = false : validaAltura = true;
    return validaAltura; 
}