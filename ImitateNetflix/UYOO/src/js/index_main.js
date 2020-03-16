import { APP_KEY } from "../key/appKey.js";

const getContents = genre => {
  const date = new Date();
  fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${
      genre.id
    }&primary_release_year=${date.getFullYear()}&api_key=${APP_KEY}&language=ko-KR`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(res) {
      const contents = res.results;
      console.log(contents);

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
        const templateSliderContents = document.querySelector(
          "#template-slider__item"
        ).innerHTML;

        html_item += templateSliderContents
          .replace("{index}", content.id)
          .replace("{imageSrc}", content.poster_path)
          .replace("{title}", content.title);
      });

      slider.innerHTML = html_item;
      contentsSection.appendChild(slider);
      main.appendChild(contentsSection);
      console.log(contentsSection);
    });
};

const getGenres = () => {
  fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${APP_KEY}&language=ko-KR`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
      // body: JSON.stringify(data)
    }
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(res) {
      const genres = res.genres;
      //console.log(genres);

      let genre = genres[0];
      console.log("genre: ", genre);
      getContents(genre);
    });
};

function init() {
  getGenres(); //존재하는 장르 정보 얻기
}

init();
