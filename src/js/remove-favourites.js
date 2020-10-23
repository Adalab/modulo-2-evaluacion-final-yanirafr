"use strict";

// Remove favourite from list
function removeFavourite(ev) {
  const favMoviesId = parseInt(ev.currentTarget.id);

  const foundMovie = favMovies.find(
    (currentMovie) => currentMovie.show.id === favMoviesId
  );
  console.log(foundMovie);
  const favIndex = favMovies.indexOf(foundMovie);
  favMovies.splice(favIndex, 1);
  localStorage.setItem(`movies`, JSON.stringify(favMovies));

  addFavourite();
  getMovie();
  addListItem();
}

// Remove listener
function addRemoveListener() {
  const movies = document.querySelectorAll(".js-delete-btn");
  for (const movie of movies) {
    movie.addEventListener("click", removeFavourite);
  }
}
