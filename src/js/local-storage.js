"use strict";

// Movie Arrays
let browsedMovies = [];
let favMovies = [];

getMovie();
getMoviesFromLocal();

function getMoviesFromLocal() {
  const getLocal = JSON.parse(localStorage.getItem("movies"));
  if (getLocal !== null) {
    favMovies = getLocal;
    addFavourite();
  }
}
