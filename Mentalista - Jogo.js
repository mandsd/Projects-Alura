// Abaixo está a parte em JavaScript do jogo Mentalista
// O jogo escolhe um número entre 0 e 1000 e o objetivo é descobrir este número
// Ao longo dos chutes o programa dirá se o seu chute é maior ou menor do que o número secreto
// Ao acertar o número secreto será dito depois de quantos chutes você acertou
//Caso você chegue 15 chutes será mostrada uma mensagem dizendo que você perdeu.

var NumeroSecreto = parseInt(Math.random() * (1000 - 1 + 1) + 1);
var QuantidadeChutes = 0;
var MaximoErros = 15;

while (Chute != NumeroSecreto && QuantidadeChutes < MaximoErros)
{
    var Chute = prompt('Digite um número entre 1 e 1000. Você tem 15 chutes');
    
    if (Chute == NumeroSecreto)
    {
        alert('Certissímo! O número é ' + NumeroSecreto + '. Você acertou depois de ' + QuantidadeChutes + ' tentativas.')
    }
    else
    {
        if (Chute > NumeroSecreto)
        {
            alert('Errado... O número secreto é menor do que ' + Chute + '. Ainda restam ' + (MaximoErros - 1 - QuantidadeChutes) + ' tentativas.')
        }
        if (Chute < NumeroSecreto)
        {
            alert('Errou... O número secreto é maior do que ' + Chute + '. Ainda restam ' + (MaximoErros - 1 - QuantidadeChutes) + ' tentativas.')
        }
    }
    QuantidadeChutes ++
}

if (QuantidadeChutes == MaximoErros)
{
    alert('Você atingiu o limite de chutes e perdeu :(. O número era ' + NumeroSecreto + '. Boa sorte na próxima!')
}

// link com html e css colocados: https://codepen.io/mandsdahm/full/LYBgrgZ
