import {APP_KEY} from "../key/appKey.js";
const popularUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}`;

const getPopularMovies = popularMovies =>{
    fetch(
        popularUrl,{method: "GET", headers:{}}
    )
    .then(response=>{
        //console.log(response);
        return response.json();
    })
    .then(json=>{
        //console.log(json);
        const arrMovies = json.results;
        const popularMovieImg = document.querySelector('.popular_movie_img');
        const popularMovieTitle = document.querySelector('.popular_movie_title h1');
        const popularMovieRank = document.querySelector('.popular_movie_rank h2');
        const popularMovieOverview = document.querySelector('.popular_movie_overview');
        let r = Math.floor(Math.random()*arrMovies.length);
        // console.log(r);

        /* get random main page info */
        const mainPageInfo = arrMovies[r];
        popularMovieImg.src += mainPageInfo.backdrop_path;     
        popularMovieTitle.innerHTML = mainPageInfo.title;
        popularMovieRank.innerHTML ='Rank: '+ r;
        popularMovieOverview.innerHTML = mainPageInfo.overview; 
    })
    .catch(function(e){
        console.log(e);
    })
}

getPopularMovies();