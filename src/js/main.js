"use strict";

// Query selectors

const btn = document.querySelector(".js-btn");

getMovie();

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
      console.log(browsedMovies);
    });
}

// Button event listener
btn.addEventListener("click", getMovie);

function addListItem() {
  movieList.innerHTML = "";
  for (let i = 0; i < browsedMovies.length; i++) {
    // si la serie actual está en fav añado la clase
    let movie = "";
    movie += `<li `;
    movie += `class="`;
    movie += `js-movie js-movie${i} movie__list__item" id="${browsedMovies[i].show.id}">`;
    movie += `<img class="`;
    // Add selected class
    movie += `js-movie-img${i} movie__list__img" `;

    // Add image
    if (browsedMovies[i].show.image === null) {
      movie += `src= "https://via.placeholder.com/210x295/ffffff/666666/?text=Image"`;
    } else {
      movie += `src = ${browsedMovies[i].show.image.medium}`;
    }
    movie += ` alt="${browsedMovies[i].show.name}" title="${browsedMovies[i].show.name}">`;
    movie += `${browsedMovies[i].show.name}`;
    movie += `</li>`;

    movieList.innerHTML += movie;
  }
}
