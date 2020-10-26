"use strict";

/* Note: getMovie() and  addFavourite() functions contain different methods for adding elements to the page.
I decided to keep both version for the interview version.
In the final version of a project it would be homogenized.
You can find versions of both functions using the same method in innerHtml and DOM2 branches*/

// Movie Arrays
let browsedMovies = [];
let favMovies = [];

// Query selectors
const movieList = document.querySelector(".js-list");
const favList = document.querySelector(".js-fav");
const btn = document.querySelector(".js-btn");
const delButton = document.querySelector(".js-delete-all");

// Startup
getMoviesFromLocal();

// Fetch shows function
function getMovie() {
  const input = document.querySelector(".js-input").value;
  fetch(`//api.tvmaze.com/search/shows?q=${input}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Add list item
      browsedMovies = data;
      addListItem();
      addListener();
    });
}

// Browse button event listener
btn.addEventListener("click", getMovie);

// Add browsed shows function
// This was made using innerHTML
function addListItem() {
  movieList.innerHTML = "";
  for (let i = 0; i < browsedMovies.length; i++) {
    let movie = "";
    movie += `<li title="${browsedMovies[i].show.name}"`;
    movie += `class="`;
    // Add selected class
    const favMoviesId = parseInt(browsedMovies[i].show.id);
    const foundFav = favMovies.find(
      (currentMovie) => currentMovie.show.id === favMoviesId
    );
    if (foundFav === undefined) {
      movie += ``;
    } else {
      movie += `selected `;
    }
    //
    movie += `js-movie js-movie${i} movie__list__item" id="${browsedMovies[i].show.id}">`;
    movie += `<img class="js-movie-img${i} movie__list__img" `;

    // Add image
    if (browsedMovies[i].show.image === null) {
      movie += `src= "https://via.placeholder.com/210x295/ffffff/666666/?text=Image"`;
    } else {
      movie += `src = ${browsedMovies[i].show.image.medium}`;
    }
    movie += ` alt="${browsedMovies[i].show.name}" title="${browsedMovies[i].show.name}">`;
    movie += `<h3 class="movie__list__name">${browsedMovies[i].show.name}</h3>`;
    movie += `</li>`;

    movieList.innerHTML += movie;
  }
}
