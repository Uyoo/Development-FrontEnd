import {APP_KEY} from "../key/appKey.js";

const getPopularMovie = popularMovie =>{
    const date = new Date();
    fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc
    )
}