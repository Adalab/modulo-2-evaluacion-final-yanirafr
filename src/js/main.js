"use strict";

const movieList = document.querySelector(".js-list");
const btn = document.querySelector(".js-btn");

function getMovie() {
  const input = document.querySelector(".js-input").value;
  fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data[0].show.name);
      for (let i = 0; i < data.length; i++) {
        movieList.innerHTML += `<li class="js-movie${i}"><img src="${data[i].show.image.medium}" alt="${data[i].show.name}" title="${data[i].show.name}">${data[i].show.name}</li>`;
        // console.log(data[i].show.name);
      }
      //   addListItem();
    });
  console.log(input);
}

btn.addEventListener("click", getMovie);

function addListItem() {}
