"use strict";

// Get local storage function
function getMoviesFromLocal() {
  const getLocal = JSON.parse(localStorage.getItem("movies"));
  if (getLocal !== null) {
    favMovies = getLocal;
    addFavourite();
  } else {
    favMovies = [];
  }
}
