document.querySelector("#prazo").addEventListener("change", calcular)
document.querySelector("#pais").addEventListener("change", calcular)
document.querySelector("#prototipo_sim").addEventListener("change", calcular)
document.querySelector("#prototipo_nao").addEventListener("change", calcular)
document.querySelector("#prazo").addEventListener("imput", function(){
    const prazo = document.querySelector("#prazo")
    document.querySelector("label[for=prazo]").innerText = "Prazo: " + prazo
    calcular
})

function calcular() {
//    const tipo = document.querySelector("#pais").value // Added # here
//   if(tipo == 2) valor += 2000

//   const prototipo = document.querySelector("#prototipo_sim").checked
//    if(prototipo) valor *= 1

//   const prototipo = document.querySelector("#prototipo_nao").checked
//    if(prototipo) valor *= 1
    const nivelCliente = document.querySelector("#prazo").value
    let valor = nivelCliente

    let nivelExperiencia = "";
    if (valor === "1") {
        nivelExperiencia = "Inexperiente";
    } else if (valor === "2") {
        nivelExperiencia = "Básico";
    } else if (valor === "3") {
        nivelExperiencia = "Médio";
    } else if (valor === "4") {
        nivelExperiencia = "Avançado";
    } else if (valor === "5") {
        nivelExperiencia = "Mestre";
    } else {
        nivelExperiencia = "Nível não definido";
    }

    document.querySelector("#valor").innerText = "Nível: " + nivelExperiencia;
}
