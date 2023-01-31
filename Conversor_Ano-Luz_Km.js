// Abaixo está um projeto que converte ano-luz para Km(quilômetros).

var cotacaoAnoLuz = 9.46;
var valorEmKm;

alert("Seja bem vindo!");
nome = prompt("Qual o seu nome? ");
valorEmAnoLuz = prompt(
  "Olá, " + nome + ". Digite um valor em Ano-Luz para ser convertido em Km: "
);

valorEmKm = valorEmAnoLuz * cotacaoAnoLuz;
valorEmKm = valorEmKm.toFixed(2);

alert(
  "O valor de " +
    valorEmAnoLuz +
    " ano-luz equivale à " +
    valorEmKm +
    " trilhões em Km"
);

// link com html e css colocados: https://codepen.io/mandsdahm/full/poZxpma
