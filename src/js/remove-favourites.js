"use strict";

// Remove favourite from list
function removeFavourite(ev) {
  const favMoviesId = parseInt(ev.currentTarget.id);

  const foundMovie = browsedMovies.find(
    (currentMovie) => currentMovie.show.id === favMoviesId
  );

  console.log(favMoviesId);
  favMovies.splice(foundMovie, 1);

  addFavourite();
}

// Remove listener
function addRemoveListener() {
  const movies = document.querySelectorAll(".js-delete-btn");
  for (const movie of movies) {
    movie.addEventListener("click", removeFavourite, removeClass);
  }
}
