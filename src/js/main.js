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
      for (let i = 0; i < data.length; i++) {
        movieList.innerHTML += `<li class="js-movie${i} movie__list__item"><div class="movie__list__box"><img class="js-movie-img${i} movie__list__img" src="" alt="${data[i].show.name}" title="${data[i].show.name}">${data[i].show.name}</div></li>`;
        if (data[i].show.image === null) {
          document.querySelector(`.js-movie-img${i}`).src =
            "https://via.placeholder.com/210x295/ffffff/666666/?text=Image";
        } else {
          const listItem = document.querySelector(`.js-movie-img${i}`);
          listItem.src = `${data[i].show.image.medium}`;
        }
      }
      movieList.addEventListener("click", selectFavourite);
      console.log(movieList);
      //   addListItem();
    });
}

// Button event listener
btn.addEventListener("click", getMovie);

// function addListItem() {}
