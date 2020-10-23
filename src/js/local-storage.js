"use strict";

// Movie Arrays
let browsedMovies = [];
let favMovies = [];

getMovie();
getMoviesFromLocal();

function getMoviesFromLocal() {
  const getLocal = JSON.parse(localStorage.getItem("movies"));
  favMovies = getLocal;
  console.log("fav array", favMovies);
  addFavourite();
}

console.log("Local", localStorage);
console.log("fav", favMovies);
