// Abaixo está um projeto que converte Bitcoins para Euro em JavaScript.

var cotacaoDaBitcoin = 21311.89;
var valorEmEuro;

alert("Seja bem vindo!");
nome = prompt("Qual o seu nome? ");
valorEmBitcoin = prompt(
  "Olá, " + nome + ". Digite um valor em Bitcoin para ser convertido a Euro: "
);

valorEmEuro = valorEmBitcoin * cotacaoDaBitcoin;
valorEmEuro = valorEmEuro.toFixed(2);

alert("O valor de ₿ " + valorEmBitcoin + " em Euro é € " + valorEmEuro);


// link com html e css colocados: https://codepen.io/mandsdahm/full/yLqRoJb
