"use strict";

// Movie Arrays
let browsedMovies = [];
let favMovies = [];

getMoviesFromLocal();

function getMoviesFromLocal() {
  const getLocal = JSON.parse(localStorage.getItem("movies"));
  if (getLocal !== null) {
    favMovies = getLocal;
    addFavourite();
  } else {
    favMovies = [];
  }
}
