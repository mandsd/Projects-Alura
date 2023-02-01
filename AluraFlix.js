// Esse projeto tem o intuito de colocar filmes e séries em um catálogo montado no code pen
// A seguir está a parte feita em JavaScript

var ListaSeries = ["http://dicasgeeks.com.br/wp-content/uploads/2021/05/Gilmore-Girls-capa.jpg", "https://resize.elle.fr/portrait_1280/var/plain_site/storage/images/loisirs/series/stranger-things-saison-4-on-connait-enfin-la-date-de-diffusion-3991840/96123415-1-fre-FR/Stranger-Things-saison-4-on-connait-enfin-la-date-de-diffusion.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/7/71/Brooklyn_Nine-Nine-5.jpg/230px-Brooklyn_Nine-Nine-5.jpg", "https://br.web.img3.acsta.net/pictures/22/11/30/19/53/5856320.jpg", "https://resizing.flixster.com/6yno1V6oi8gwhPQQ99rQlwYQZP4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI1Mzk5NS53ZWJw", "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/11/25/unnamed-1ib3894cp3hwm.jpg", "https://s2.glbimg.com/PSBudnC6rlsor-aUHJar7EXHdGM=/362x536/https://s2.glbimg.com/3o_Ktc-0WfFXAkrLTnzD8GnlddE=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2021/x/b/FUnNfjT3SqhSWmHIlgEA/2021-2391-cartas-para-julieta-poster.jpg" ,"https://m.media-amazon.com/images/I/51BGV8AJ4RL._AC_.jpg", "https://upload.wikimedia.org/wikipedia/pt/8/85/Pride_and_Prejudice_2005.jpg"];

var NomeSeries = ["Gilmore Girls", "Stranger Things", "B99", "The last of us", "Anne with an e", "Harry Potter: CS", "Cartas para Julieta", "Star Wars: 2", "Orgulho e Preconceito"];


var i = 0;

document.write('<div class="container_todasSeries">');

while (i < ListaSeries.length) 
{
  if (ListaSeries[i].endsWith("jpg")) 
  {
      document.write('<div class="series">');
      document.write("<img src=" + ListaSeries[i] + ">");
      document.write('<p class="nomesSeries">' + NomeSeries[i] + "</p>");
      document.write("</div>");
  }
  i++;
}

// link com css e html implementados: https://codepen.io/mandsdahm/full/jOpQLBq
