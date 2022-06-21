var titulo = document.querySelector(".titulo"); // variavel titulo, busca a classe de css, para não ter problema se alguém mudar o (html) h1 para h2 por ex
titulo.textContent = "Aparecida Nutricionista"; //textContent mostra o conteudo dentro da variavel titulo, e  o sinal de igual muda o texto

//Evento escutar toda vez que o aparecida nutricionista for clicado
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){ //cria a função de mostrar a mensagem dentro do console
    console.log("Olá, fui clicado!")
}


// Calculando IMC
for (var i = 0; i < pacientes.length; i++){
    var paciente = document.querySelector ("#primeiro-paciente"); //chama id através de #
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
    var imc = peso / (altura * altura);
    tdImc.textContent = imc; //substituiu o conteudo do tdImc pelo resultado da variavél imc
    console.log(imc); //printa o resultado no console
    }
}