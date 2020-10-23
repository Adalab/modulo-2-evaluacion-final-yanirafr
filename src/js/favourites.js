"use strict";

// Movie Arrays
let browsedMovies = [];
const favMovies = [];

// Query selectors
const favList = document.querySelector(".js-fav");
const movieList = document.querySelector(".js-list");

// Select Favourites
function selectFavourite(ev) {
  const favMoviesId = parseInt(ev.currentTarget.id);
  console.log("right", favMoviesId);

  const foundMovie = browsedMovies.find(
    (currentMovie) => currentMovie.show.id === favMoviesId
  );

  if (ev.currentTarget.classList.contains("selected")) {
    ev.currentTarget.classList.remove("selected");
    favMovies.splice(foundMovie, 1);
  } else {
    ev.currentTarget.classList.add("selected");
    favMovies.push(foundMovie);
  }
  addFavourite();
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
    favMovieList += `<li class="js-fav-item js-fav${i} favourite__list__item" id=${favMovies[i].show.id}><img class="js-fav-img${i} favourite__list__img" src="" alt="${favMovies[i].show.name}" title="${favMovies[i].show.name}">${favMovies[i].show.name}<li>`;

    const favMovieImg = document.querySelector(`.js-fav-img${i}`);

    // console.log(favMovieList);
    // console.log(favMovieImg);

    // if (favMovies[i].show.image === null) {
    //   document.querySelector(`.js-fav-img${i}`).src =
    //     "https://via.placeholder.com/210x295/ffffff/666666/?text=Image";
    // } else {
    // favMovieImg.src = `${favMovies[i].show.image.medium}`;
  }
  favList.innerHTML = favMovieList;
  addRemoveListener();
}
