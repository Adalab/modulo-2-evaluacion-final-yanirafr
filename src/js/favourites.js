"use strict";

// Query selectors
const favList = document.querySelector(".js-fav");
const movieList = document.querySelector(".js-list");

// Select Favourites
function selectFavourite(ev) {
  const favMoviesId = parseInt(ev.currentTarget.id);

  const foundFav = favMovies.find(
    (currentMovie) => currentMovie.show.id === favMoviesId
  );

  if (foundFav === undefined) {
    // Add
    const addFav = browsedMovies.find(
      (currentMovie) => currentMovie.show.id === favMoviesId
    );
    favMovies.push(addFav);
    localStorage.setItem("movies", JSON.stringify(favMovies));
  } else {
    // Remove
    const removeFav = favMovies.find(
      (currentMovie) => currentMovie.show.id === favMoviesId
    );
    const favIndex = favMovies.indexOf(removeFav);
    favMovies.splice(favIndex, 1);
    localStorage.setItem(`movies`, JSON.stringify(favMovies));
  }
  addFavourite();
  getMovie();
  addListItem();
}

// Movies event listener
function addListener() {
  const movies = document.querySelectorAll(".js-movie");
  for (const movie of movies) {
    movie.addEventListener("click", selectFavourite);
  }
}

// Add favourites to list
function addFavourite() {
  let favMovieList = "";
  for (let i = 0; i < favMovies.length; i++) {
    favMovieList += `<li class="js-fav-item js-fav${i} favourite__list__item">`;
    favMovieList += `<img class="js-fav-img${i} favourite__list__img" `;
    if (favMovies[i].show.image === null) {
      favMovieList += `src= "https://via.placeholder.com/210x295/ffffff/666666/?text=Image"`;
    } else {
      favMovieList += `src="${favMovies[i].show.image.medium}"`;
    }
    favMovieList += `alt="${favMovies[i].show.name}" title="${favMovies[i].show.name}">`;
    favMovieList += favMovies[i].show.name;
    favMovieList += `<button class="delete__btn js-delete-btn" id=${favMovies[i].show.id}>X</button>`;
    favMovieList += `<li>`;
  }
  favList.innerHTML = favMovieList;
  addRemoveListener();
}
