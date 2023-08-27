//mostrar requisição no titulo do container
var tituloFilme = document.querySelector("#tittle");
// mostrar requisição de descrição do filme
var overwiew = document.querySelector("#content");
// realizar requisição
const requisicao = fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1',{
    method:'GET'
}).then(Response => Response.json()).then(function(json){
    json.results.map(function(valor){
        tituloFilme.innerHTML=``+valor.title+``;
        overwiew.innerHTML = ``+valor.overview+``
        
        
        
    })
    

})






