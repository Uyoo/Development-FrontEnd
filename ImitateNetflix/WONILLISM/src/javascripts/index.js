import {APP_KEY} from "../key/appKey.js";
const getAPI = Movies =>{
    fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}`,{
            method: "GET",
            headers:{

            }
        }
    )
    .then(response=>{
        //console.log(response);
        return response.json();
    })
    .then(json=>{
        //console.log(json);
        return json;
    })
}
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
        const popularMovies = json.results;

        const popularMovieImg = document.querySelector('.popular_movie_img');
        let r = Math.floor(Math.random()*popularMovies.length);
        // console.log(r);
        popularMovieImg.src += popularMovies[r].backdrop_path;

        const popularMovieTitle = document.querySelector('.popular_movie_title h1');
        popularMovieTitle.innerHTML = popularMovies[r].title;
        const popularMovieRank = document.querySelector('.popular_movie_rank h2');
        popularMovieRank.innerHTML ='Rank: '+ r;
        const popularMovieOverview = document.querySelector('.popular_movie_overview');
        popularMovieOverview.innerHTML = popularMovies[r].overview;

    })
    .catch(function(e){
        console.log(e);
    })
}
function init(){
    //getMovies();
    getPopularMovie();
}
init();