"use strict";

// Query selectors

const btn = document.querySelector(".js-btn");

// Fetch function
function getMovie() {
  const input = document.querySelector(".js-input").value;
  fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Add list item
      browsedMovies = data;
      addListItem();
      addListener();
    });
}

// Button event listener
btn.addEventListener("click", getMovie);

function addListItem() {
  for (let i = 0; i < browsedMovies.length; i++) {
    movieList.innerHTML += `<li class="js-movie js-movie${i} movie__list__item"><img class="js-movie-img${i} movie__list__img" src="" alt="${browsedMovies[i].show.name}" title="${browsedMovies[i].show.name}">${browsedMovies[i].show.name}</li>`;
    if (browsedMovies[i].show.image === null) {
      document.querySelector(`.js-movie-img${i}`).src =
        "https://via.placeholder.com/210x295/ffffff/666666/?text=Image";
    } else {
      const listItem = document.querySelector(`.js-movie-img${i}`);
      listItem.src = `${browsedMovies[i].show.image.medium}`;
    }
    // movieList.addEventListener("click", selectFavourite);
  }
}
