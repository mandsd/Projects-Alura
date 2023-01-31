// Abaixo está a parte em JavaScript do jogo Mentalista
// O jogo escolhe um número entre 0 e 1000 e o objetivo é descobrir este número
// Ao longo dos chutes o programa dirá se o seu chute é maior ou menor do que o número secreto
// Ao acertar o número secreto será dito depois de  qwuantos chutes você acertou


var NumeroSecreto = parseInt(Math.random() * 1001);
var QuantidadeChutes = 0;

while (Chute != NumeroSecreto)
{
    var Chute = prompt('Digite um número entre 1 e 1000');
    
    if (Chute == NumeroSecreto)
    {
        alert('Certissímo! O número é ' + NumeroSecreto + '. Você acertou depois de ' + QuantidadeChutes + ' tentativas.')
    }
    else
    {
        if (Chute > NumeroSecreto)
        {
            alert('Errado... O número secreto é menor do que ' + Chute)
            QuantidadeChutes += 1
        }
        else if (Chute < NumeroSecreto)
        {
            alert('Errou... O número secreto é maior do que ' + Chute)
            QuantidadeChutes += 1
        }
    }
}
