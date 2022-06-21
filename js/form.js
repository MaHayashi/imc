//Evento para adicionar o paciente, como acrescentar dados do JS para o HTML, criar um elemento do HTML dentro do JS
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//botaoAdicionar.addEventListener("click", function(){
//    console.log("Oi");}); -> o comportamento padrão do html para botão dentro de formulário é recarregar a página automaticamente, por isso não dá tempo de vermos a mensagem dentro do console
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //a funcao event previne a funcao default de recarregar a página
   
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // acrescentar o paciente dentro da tabela, lembrar que tabela é uma tr e dentro tem varios td
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome; //dentro da variavel nomeTd tem o conteudo da variavel nome linha18
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd); //appendChild acrescenta os novos Td dentro da tabela paciente
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes"); //busca no t-body
    tabela.appendChild(pacienteTr);
});
