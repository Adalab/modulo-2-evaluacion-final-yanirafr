"use strict";

const favMovies = [];

const movieList = document.querySelector(".js-list");

function selectFavourite(ev) {
  ev.target.classList.add("selected");
  favMovies.push(ev.target);
  console.log(favMovies);
  console.log(movieList);
}

function showFavourite() {
  const favList = document.querySelector(".favourite__list");
  for (let movie of favMovies) {
    favList.innerHTML += movie;
  }
}
