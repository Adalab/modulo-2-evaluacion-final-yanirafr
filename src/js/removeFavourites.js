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
  const movies = document.querySelectorAll(".js-fav-item");
  for (const movie of movies) {
    movie.addEventListener("click", removeFavourite, removeClass);
  }
}

// Class remove

function removeClass(ev) {
  const favMoviesId = parseInt(ev.currentTarget.id);
  console.log(favMoviesId);
  //Duda
  const favSelected = document.getElementById(`${favMoviesId}`);

  console.log("selected ", favSelected);
}
