"use strict";

// Remove favourite from list function
function removeFavourite(ev) {
  const favMoviesId = parseInt(ev.currentTarget.id);

  const foundMovie = favMovies.find(
    (currentMovie) => currentMovie.show.id === favMoviesId
  );
  const favIndex = favMovies.indexOf(foundMovie);
  favMovies.splice(favIndex, 1);
  localStorage.setItem(`movies`, JSON.stringify(favMovies));

  ev.preventDefault();

  addFavourite();
  getMovie();
  addListItem();
}

// Remove favourite listener
function addRemoveListener() {
  const movies = document.querySelectorAll(".js-delete-btn");
  for (const movie of movies) {
    movie.addEventListener("click", removeFavourite);
  }
}

// Delete all button function
function deleteAll(ev) {
  favMovies = [];
  localStorage.clear();

  ev.preventDefault();

  addFavourite();
  getMovie();
}

// Delete all button listener
delButton.addEventListener("click", deleteAll);
