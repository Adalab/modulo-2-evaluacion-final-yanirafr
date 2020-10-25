"use strict";
getMovie();
// Query selectors

const btn = document.querySelector(".js-btn");

// Fetch function
function getMovie() {
  const input = document.querySelector(".js-input").value;
  fetch(`//api.tvmaze.com/search/shows?q=${input}`)
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
  movieList.innerHTML = "";
  for (let i = 0; i < browsedMovies.length; i++) {

    // List item
    // let movie = "";
    // movie += `<li title="${browsedMovies[i].show.name}"`;
    // movie += `class="`;
    // movie += `js-movie js-movie${i} movie__list__item" id="${browsedMovies[i].show.id}">`;
    const movie = document.createElement("li");
    movie.setAttribute("title", `${browsedMovies[i].show.name}`);
    movie.setAttribute("id", `${browsedMovies[i].show.id}`);
    movie.classList.add("js-movie");
    movie.classList.add(`js-movie${i}`);
    movie.classList.add("movie__list__item");

    // Add selected class
    const favMoviesId = parseInt(browsedMovies[i].show.id);
    const foundFav = favMovies.find(
      (currentMovie) => currentMovie.show.id === favMoviesId
    );
    // console.log(foundFav);
    if (foundFav !== undefined) {
      // movie += ``;
      // movie.classList.add("a");
      // console.log("en el if");
      movie.classList.add("selected");}
    // } else {
      // movie += `selected `;
      // console.log("en el else");
    // }

    //Image
    // movie += `<img class="js-movie-img${i} movie__list__img" `;
    // movie += ` alt="${browsedMovies[i].show.name}" title="${browsedMovies[i].show.name}">`;
    const movieImg = document.createElement("img");
    movie.appendChild(movieImg);
    movieImg.classList.add(`js-movie-img${i}`);
    movieImg.classList.add(`movie__list__img`);
    movieImg.setAttribute("alt", `${browsedMovies[i].show.name}`);
    movieImg.setAttribute("title", `${browsedMovies[i].show.name}`);

    // Add image src
    if (browsedMovies[i].show.image === null) {
      // movie += `src= "https://via.placeholder.com/210x295/ffffff/666666/?text=Image"`;
      movieImg.src = "https://via.placeholder.com/210x295/ffffff/666666/?text=Image";
    } else {
      // movie += `src = ${browsedMovies[i].show.image.medium}`;
      movieImg.src = `${browsedMovies[i].show.image.medium}`;
    }

    // Title
    // movie += `<h3 class="movie__list__name">${browsedMovies[i].show.name}</h3>`;
    const movieTitle = document.createElement("h3");
    movie.appendChild(movieTitle);
    movieTitle.classList.add("movie__list__name");
    const movieTitleText = document.createTextNode(`${browsedMovies[i].show.name}`)
    movieTitle.appendChild(movieTitleText);
    
    //Add to list
    // movie += `</li>`;
    // movieList.innerHTML += movie;
    movieList.appendChild(movie);
  }
}
