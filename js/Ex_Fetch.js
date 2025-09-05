fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=fr-FR&page=1', {
    method: "GET",
})
.then(res => res.json())
.then(function(json) {
    var container = document.querySelector('.container');
    json.results.forEach(function(movie) {
        container.innerHTML += 
        '<p>' + movie.title + '</p>'
        + '<div style="display: none;" class="description">'+movie.overview+'</div>';
        //console.log(movie);
        
    });
})