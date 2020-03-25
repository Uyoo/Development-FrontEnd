import * as api from "../lib/api.js";

const API_RESOURCE = "https://image.tmdb.org/t/p/original/";

//main poster에서 인기있는 영화 정보 가져오기
const getPopularMovie = async () => {
  const response = await api.getPopularMovieAPI();

  const randomNum = Math.floor(Math.random() * response.results.length);
  const movieInfo = response.results[randomNum];
  console.log(movieInfo);

  //paint main poster
  const mainPoster = document.querySelector(".main-poster");
  const mainPosterImg = mainPoster.querySelector(".main-poster__img");

  const mainPosterTitle = mainPoster.querySelector(".title-section h1");
  const mainPosterReleaseDate = mainPoster.querySelector(
    ".release-section span"
  );
  const mainPosterDescription = mainPoster.querySelector(
    ".description-section h3"
  );

  mainPosterTitle.innerText = movieInfo.title;
  mainPosterImg.src = API_RESOURCE + movieInfo.backdrop_path;
  mainPosterReleaseDate.innerText = movieInfo.release_date;
  mainPosterDescription.innerText = movieInfo.overview;
};

const getContents = async genre => {
  const date = new Date();
  const response = await api.getGenreContentsAPI(genre, date);
  const contents = response.results;
  // console.log(contents);

  const main = document.querySelector("main");
  const contentsSection = document.createElement("div");
  contentsSection.classList.add("contents");
  const templateGenre = document.querySelector("#template-genre").innerHTML;

  //장르 제목 입력
  let resultHTML = "";
  resultHTML = templateGenre.replace("{title}", genre.name);
  contentsSection.innerHTML = resultHTML;

  //장르에 속한 작품들 입력
  const slider = document.createElement("div");
  slider.classList.add("slider");

  let html_item = "";
  contents.map(content => {
    if (content.poster_path !== null) {
      const templateSliderContents = document.querySelector(
        "#template-slider__item"
      ).innerHTML;

      html_item += templateSliderContents
        .replace("{index}", content.id)
        .replace("{imageSrc}", content.poster_path)
        .replace("{title}", content.title);
    }
  });

  slider.innerHTML = html_item;
  contentsSection.appendChild(slider);
  main.appendChild(contentsSection);
};

const getGenres = async () => {
  const response = await api.getGenresAPI();
  const genres = response.genres;
  // console.log("genres: ", genres);

  genres.map(genre => {
    getContents(genre);
  });
};

function init() {
  getPopularMovie(); //인기있는 영화 가져오기
  getGenres(); //존재하는 장르 정보 얻기
}

init();
