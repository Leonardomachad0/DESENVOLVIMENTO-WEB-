/*--------------- Tamanho do array ---------------*/
const frutas = ['maçã', 'banana', 'laranja', 'uva'];

console.log("Número de frutas:", frutas.length); // Saída: "Número de frutas: 4"

/*--------------- Recuperar um elemento específico ---------------*/
console.log("Segunda fruta:", frutas[1]); // Saída: "Segunda fruta: banana"

/*--------------- fruta no final do array ---------------*/
frutas.push("morango");

console.log("Frutas após adicionar morango:", frutas);

/*---------------  fruta no início do array ---------------*/
frutas.unshift("abacaxi");

console.log("Frutas após adicionar abacaxi no início:", frutas);

/*--------------- Remover do array ---------------*/
frutas.shift();

console.log("Frutas após remover a primeira:", frutas);

/*--------------- Remover a última fruta do array ---------------*/
frutas.pop();

console.log("Frutas após remover a última:", frutas);
