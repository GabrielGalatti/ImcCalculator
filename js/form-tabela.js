var btnAdd = document.querySelector("#adicionar-paciente");

btnAdd.addEventListener("click", function(){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = getPacienteForm(form);
    var table = createTable(paciente);

    var error = validaPaciente(paciente);
    
    if(error.length > 0){  
        
        exibeMensagemErro(error);
        return; 
    }
    else{
        ClearErrors()
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(table);

    form.reset();
    
})

function getPacienteForm(form){
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.altura.value, form.peso.value)
    }
    return paciente;
}

function montaTd(dado, classe){
    
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td
}

function exibeMensagemErro(erro){
    var errorSpan = document.querySelector("#msg-error");
    ClearErrors();
    erro.forEach(error => {
        var liError = document.createElement("li");
        liError.innerHTML = error;
        errorSpan.appendChild(liError);
        liError.className = "error";
    });
}

function createTable(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente){
    var erros = [];

    

    if(paciente.nome.length == 0)erros.push("O nome deve ser preenchido");

    if(paciente.altura.length == 0){
        erros.push("A altura deve ser preenchida")
    }
    else{   
    if(!validaAltura(paciente.altura))erros.push("A altura preenchida é inválida")
    }

    if(paciente.peso.length == 0){
        erros.push("O peso deve ser preenchido")
    }
    else{
        if(!validaPeso(paciente.peso)) erros.push("O peso preenchido é inválido");
    }

    if(paciente.gordura.length == 0)erros.push("A gordura deve ser preenchida");
    

    return erros;
}

function ClearErrors(){
    var errorSpan = document.querySelector("#msg-error");
    errorSpan.innerHTML = "";
    errorSpan.classList.remove("error");
}