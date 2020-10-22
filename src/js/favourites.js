"use strict";

let browsedMovies = [];
const favMovies = [];
const favList = document.querySelector(".favourite__list");
const movieList = document.querySelector(".js-list");

function selectFavourite(ev) {
  ev.currentTarget.classList.add("selected");
}

function addListener() {
  const movies = document.querySelectorAll(".js-movie");
  for (const movie of movies) {
    movie.addEventListener("click", selectFavourite);
  }
}
