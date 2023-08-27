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
       /*
       
       # terei que criar um novo elemento, utilizando for

         for (let i = 0; i < 10; i++) {
        const valor = json.results[i];
        const novoTitulo = document.createElement("h2");
        novoTitulo.textContent = valor.title;
        tituloFilme.appendChild(novoTitulo);
        
        # criando nova descricao

        const novaDescricao = document.createElement("p");
        novaDescricao.textContent = valor.overview;
        overwiew.appendChild(novaDescricao);

       */
        
    })
    

})






