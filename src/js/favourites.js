"use strict";

let browsedMovies = [];
const favMovies = [];
const favList = document.querySelector(".favourite__list");
const movieList = document.querySelector(".js-list");

function selectFavourite(ev) {
  ev.currentTarget.classList.add("selected");
  console.log(favMovies);
}

function addListener() {
  const movies = document.querySelectorAll(".js-movie");
  console.log(movies);
  for (const movie of movies) {
    console.log(movie);
    movie.addEventListener("click", selectFavourite);
  }
}
