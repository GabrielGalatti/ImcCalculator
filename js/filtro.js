var inputFiltro = document.querySelector("#filtrar-tabela");

inputFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente")
    if (this.value.length > 0) {
        pacientes.forEach(paciente => {
            var nomeTd = paciente.querySelector(".info-nome");
            var nome = nomeTd.textContent;
            var expressao = new RegExp(this.value , "i");
            if (!expressao.test(nome)) {

                paciente.classList.add("invisible");
            }
            else {
                paciente.classList.remove("invisible");
            }
        });
    }
    else{
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisible");            
        });
    }
})