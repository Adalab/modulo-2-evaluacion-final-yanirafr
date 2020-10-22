"use strict";

const favMovies = [{ title: "", image: "" }];

const movieList = document.querySelector(".js-list");

function selectFavourite(ev) {
  ev.currentTarget.classList.add("selected");
  favMovies.push(ev.target);
  console.log(favMovies);
}
