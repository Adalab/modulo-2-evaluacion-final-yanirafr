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
  // let favMovieList = "";
  for (let i = 0; i < favMovies.length; i++) {
    //List element
    // favMovieList += `<li class="js-fav-item js-fav${i} favourite__list__item">`;
    const favMovieList = document.createElement("li");
    favMovieList.classList.add("js-fav-item");
    favMovieList.classList.add(`js-fav${i}`);
    favMovieList.classList.add("favourite__list__item");
    
    // Add image
    // favMovieList += `<img class="js-fav-img${i} favourite__list__img" `;
    // favMovieList += `alt="${favMovies[i].show.name}" title="${favMovies[i].show.name}">`;
    const listImg = document.createElement("img");
    favMovieList.appendChild(listImg);
    listImg.classList.add(`js-fav-img${i}`);
    listImg.classList.add("favourite__list__img");
    listImg.setAttribute("alt", `${favMovies[i].show.name}`);
    listImg.setAttribute("title", `${favMovies[i].show.name}`);

    if (favMovies[i].show.image === null) {
      // favMovieList += `src= "https://via.placeholder.com/210x295/ffffff/666666/?text=Image"`;
      listImg.src = "https://via.placeholder.com/210x295/ffffff/666666/?text=Image";
    } else {
      // favMovieList += `src="${favMovies[i].show.image.medium}"`;
      listImg.src = `${favMovies[i].show.image.medium}`;
    }

    // Title
    // favMovieList += `<h3 class="favourite__list__title">${favMovies[i].show.name}</h3>`;
    const favName = document.createElement("h3");
    favMovieList.appendChild(favName);
    favName.classList.add("favourite__list__title");
    const favNameText = document.createTextNode(`${favMovies[i].show.name}`);
    favName.appendChild(favNameText);

    // Button
    // favMovieList += `<button class="favourite__list__btn js-delete-btn" id=${favMovies[i].show.id} title="Borrar">`;
    const favBtn = document.createElement("button");
    favMovieList.appendChild(favBtn);
    favBtn.setAttribute("id", `${favMovies[i].show.id}`);
    favBtn.classList.add("favourite__list__btn");
    favBtn.classList.add("js-delete-btn");
    favBtn.setAttribute("title", "Borrar");

    // Favicon
    // favMovieList += `<i class="favourite__list__fav fas fa-trash-alt"></i>`;
    const favBtnFav = document.createElement("i");
    favBtn.appendChild(favBtnFav);
    favBtnFav.classList.add("favourite__list__fav");
    favBtnFav.classList.add("fas");
    favBtnFav.classList.add("fa-trash-alt");
    
    // favMovieList += `</button>`;
    // favMovieList += `<li>`;
    favList.appendChild(favMovieList);
  }
  // favList.innerHTML = favMovieList;

  addRemoveListener();
}
