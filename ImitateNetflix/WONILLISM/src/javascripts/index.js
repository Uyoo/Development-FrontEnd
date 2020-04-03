import * as api from "../lib/api.js";

const API_RESOURSE = "https://image.tmdb.org/t/p/original/";

const getPopularMovie = async () => {
    const response = await api.getPopularMovieAPI();
    //console.log(response);

    const randomNum = Math.floor(Math.random() * response.results.length);
    const movieInfo = response.results[randomNum];
    //console.log(movieInfo);

    const popularMovie = document.querySelector('.popular_movie');
    const popularMovieImg = document.querySelector('.popular_movie_img');
    const popularMovieTitle = document.querySelector('.popular_movie_title');
    const popularMovieRank = document.querySelector('.popular_movie_rank');
    const popularMovieOverview = document.querySelector('.popular_movie_overview');

    popularMovieTitle.innerHTML = movieInfo.title;
    popularMovieImg.src = API_RESOURSE + movieInfo.backdrop_path;
    popularMovieRank.innerHTML = 'RANK: ' + randomNum;

    //console.log(movieInfo.overview.length);
    if (movieInfo.overview.length > 150) {
        popularMovieOverview.innerHTML = movieInfo.overview.substring(0, 150) + '...';
    }
    else {
        popularMovieOverview.innerHTML = movieInfo.overview;
    }
};

const getContents = async genre => {
    const date = new Date();
    const response = await api.getGenresContentsAPI(genre, date);
    const contents = response.results;
    //console.log(contents);

    const main = document.querySelector("main");
    const contentsSection = document.createElement("div");
    contentsSection.classList.add("contents");
    const templateGenre = document.querySelector("#template-genre").innerHTML;

    let resultHTML = "";
    resultHTML = templateGenre.replace("{title}", genre.name);
    contentsSection.innerHTML = resultHTML;

    const slider = document.createElement("div");
    slider.classList.add("slider");

    let html_item = "";
    contents.map(content => {
        //console.log(content);
        if (content.poster_path !== null) {
            const templateSliderContents = document.querySelector(
                "#template-slider_item"
            ).innerHTML;


            html_item += templateSliderContents
                .replace("{idx}", content.id)
                .replace("{imageSrc}", content.poster_path)
                .replace("{title}", content.title);
        }
    });
    slider.innerHTML = html_item;
    contentsSection.appendChild(slider);
    main.appendChild(contentsSection);
}

const getGenres = async () => {
    const response = await api.getGenresAPI();
    const genres = response.genres;
    console.log(genres);
    genres.map(genre => {
        getContents(genre);
    });
}

function init() {
    getPopularMovie();
    getGenres();
}
init();


