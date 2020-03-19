import {APP_KEY} from "../key/appKey.js";
//const APP_KEY = "82d29c7e28e4f090ab1cc7e20da2d4a2";
const getPopularMovie = popularMovie =>{
    fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APP_KEY}`,
        {
            method: "GET",
            headers:{
                
            }
        }
    )
    .then(function(response){
        //console.log(response);
        return response.json();
    })
    .then(function(json){
        //console.log(json);
        const popularMovieImg = document.querySelector('.popular_move_img');
        const popularMovies = json.results;
        // console.log(popularMovies);
        let r = Math.round(Math.random()*popularMovies.length);
        // console.log(r);
        popularMovieImg.src += popularMovies[r].poster_path;
    })
    .catch(function(e){
        console.log(e);
    })
}
function init(){
    getPopularMovie();
}
init();