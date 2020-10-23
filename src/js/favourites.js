"use strict";

// Movie Arrays
let browsedMovies = [];
const favMovies = [];

// Query selectors
const favList = document.querySelector(".js-fav");
const movieList = document.querySelector(".js-list");

// Select Favourites
function selectFavourite(ev) {
  const favMoviesIndex = favMovies.indexOf(ev.currentTarget);
  console.log(ev.currentTarget.innerHTML);
  if (ev.currentTarget.classList.contains("selected")) {
    ev.currentTarget.classList.remove("selected");
    favMovies.splice(favMoviesIndex, 1);
  } else {
    ev.currentTarget.classList.add("selected");
    favMovies.push(ev.currentTarget.innerHTML);
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
  for (const movie of favMovies) {
    favList.innerHTML = `<li>${movie}<li>`;
    console.log("for", movie);
  }
}
