"use strict";

// Query selectors
const movieList = document.querySelector(".js-list");
const btn = document.querySelector(".js-btn");

// Fetch function
function getMovie() {
  const input = document.querySelector(".js-input").value;
  fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // Add list item
      for (let i = 0; i < data.length; i++) {
        movieList.innerHTML += `<li class="js-movie${i}"><img class="js-movie-img${i} src="" alt="${data[i].show.name}" title="${data[i].show.name}">${data[i].show.name}</li>`;
        if (data[i].show.image === null) {
          document.querySelector(`.js-movie-img${i}`).src =
            "https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png";
          console.log(data[i].show.name, " en el if");
        } else {
          const listItem = document.querySelector(`.js-movie-img${i}`);
          listItem.src = `${data[i].show.image.medium}`;
          console.log(listItem);
          console.log(`${data[i].show.image.medium}`);
        }
      }

      //   addListItem();
    });
  console.log(input);
}

// Button event listener
btn.addEventListener("click", getMovie);

// function addListItem() {}
