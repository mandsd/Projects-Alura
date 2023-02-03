// O programa tem como objetivo pedir ao usuário que coloque o link da imagem e do trailer de seu filme preferido.
// Podem ser colocados quantos filmes o usuário quiser!
// A seguir está a parte em JavaScript

function adicionarFilme()
{
    var filmeFavorito = document.getElementById('filme').value
    var trailerFilme = document.getElementById('trailer').value
    var elementoListaFilmes = document.getElementById('listaFilmes')
    
    if(filmeFavorito.endsWith('.jpg') || filmeFavorito.endsWith('.jpeg') || filmeFavorito.endsWith('.png'))
    {  
        elementoListaFilmes.innerHTML= elementoListaFilmes.innerHTML + "<a href=" + trailerFilme + " target='_blank'>"+ '<img src=' + filmeFavorito + '>'
        document.getElementById('filme').value = ''
    } 
    else
    {
        alert('não é uma imagem!') 
    }
  
    document.getElementById('trailer').value = ''
}

// link com css e html implementados: https://codepen.io/mandsdahm/full/LYBqRPW
