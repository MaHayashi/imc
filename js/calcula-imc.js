var titulo = document.querySelector(".titulo"); // variavel titulo, busca a classe de css, para não ter problema se alguém mudar o (html) h1 para h2 por ex
titulo.textContent = "Poli Nutri"; //textContent mostra o conteudo dentro da variavel titulo, e  o sinal de igual muda o texto

//Evento escutar toda vez que o aparecida nutricionista for clicado
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){ //cria a função de mostrar a mensagem dentro do console
    console.log("Olá, fui clicado!")
}


// Calculando IMC
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes [i];
    var tdPeso = paciente.querySelector(".info-peso"); //cria a variavel tdPeso e seleciona a info-peso
    var peso = tdPeso.textContent; //volta o conteúdo da variável tdPeso

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent; 

    //IMC
    var tdImc = paciente.querySelector (".info-imc");
    var pesoEhValido = true; //inicializa a variável como true
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000){  //se o peso menor que 0 ou peso maior que 1000kg
        console.log("Peso inválido"); //print peso inválido
        pesoEhValido = false; // o peso não é válido
        tdImc.textContent = "Peso inválido";
    }
    if (altura <= 0 || altura >= 3.00){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
    }
    if (alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc; //substituiu o conteudo do tdImc pelo resultado da variavél imc
    }
}

function calculaImc(peso, altura){ //reuso de código, cria a funcao para chamar no form.js
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}