"use strict";

// Remove favourite from list
function removeFavourite(ev) {
  const favMoviesId = parseInt(ev.currentTarget.id);
  console.log("Left", favMoviesId);

  const foundMovie = browsedMovies.find(
    (currentMovie) => currentMovie.show.id === favMoviesId
  );
  console.log(foundMovie);
  favMovies.splice(foundMovie, 1);

  addFavourite();
}

// Remove listener
function addRemoveListener() {
  const movies = document.querySelectorAll(".js-fav-item");
  for (const movie of movies) {
    movie.addEventListener("click", removeFavourite);
  }
}
