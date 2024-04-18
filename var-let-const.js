// Usando var para declarar uma variável que será reatribuída
var entradaUsuarioVar = prompt("Digite um valor:");

// Usando let para declarar uma variável que pode ser atualizada
let entradaUsuarioLet = prompt("Digite outro valor:");

// Usando const para declarar uma variável que não pode ser reatribuída
const valorFixo = 10;

// Criando um array e adicionando os valores do usuário
const valores = [];
valores.push(entradaUsuarioVar);
valores.push(entradaUsuarioLet);
valores.push(valorFixo);

// Exibindo os valores do array
console.log("Valores inseridos:", valores);



/*--------------- var ---------------*/
// Usando var para declarar uma cor
var cor = "vermelho";

// Exibindo a cor
console.log("A cor é:", cor);

/*--------------- Let ---------------*/
// Declarando variáveis numéricas com let
let numero1 = 10;
let numero2 = 5;

// Realizando operações matemáticas com as variáveis
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

// Exibindo os resultados
console.log("A soma é: " + soma);
console.log("A subtração é: " + subtracao);
console.log("A multiplicação é: " + multiplicacao);
console.log("A divisão é: " + divisao);

/*--------------- Const ---------------*/
// Usando const para declarar o número de habitantes de uma cidade
const numeroDeHabitantes = 1000000; // Exemplo fictício

// Exibindo o número de habitantes da cidade
console.log("O número de habitantes da cidade é:", numeroDeHabitantes);

