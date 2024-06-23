/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do número secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";
Melhor o trecho de código
*/

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 


function exbirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2}); Erro, refazer.
}
exibirMensagemInicia();

function verificarChute(){
    let chute = document.querySelector('input').value
    //console.log("Botão foi clicado, e gerou o número aleatório: "+ numeroSecreto);
    //console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
        exbirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentaviva';
        let mensagemTentativas = `Parabéns!! Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}`;
        exbirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exbirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exbirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementoLista = listaDeNumerosSorteados.length;

    if (quantidadeElementoLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
} 

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function exibirMensagemInicia(){
    exbirTextoNaTela('h1','Jogo do número secreto');
    exbirTextoNaTela('p','Escolha um número entre 1 e 10');
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicia();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


/*Desafio 005
Criar uma função que exibe "Olá, mundo!" no console.
function exibirMensagem(){
    return console.log('Olá, mundo!');
}
exibirMensagem();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibeNome(nome){
    comsole.log(`Olá, ${nome}!`);
}
exibeNome("Larissa");


//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function exbibeDobroDoNumero(numero){
    return numero * 2;
}
let resultado = exbibeDobroDoNumero(5);
console.log(resultado);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function exibeTresNumeros(nun1, nun2, nun3 ){
    return (nun1 + nun2 + nun3)/3;
}
let resultado = exibeTresNumeros(5,4,2);
console.log(resultado);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornaMaior(nun1, nun2){
    return nun1 > nun2 ? nun1 : nun2;
}
let maiorNumero = retornaMaior(5,3);
console.log(maiorNumero);


//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function retornaMultiplicacao(numero){
    return numero * numero
}
let resultado = retornaMultiplicacao(2);
console.log(resultado);
*/

//DESAFIO 006

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa,
  // a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

