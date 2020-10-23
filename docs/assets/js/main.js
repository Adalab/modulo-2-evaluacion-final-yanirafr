"use strict";const favList=document.querySelector(".js-fav"),movieList=document.querySelector(".js-list");function selectFavourite(e){const o=parseInt(e.currentTarget.id);if(void 0===favMovies.find(e=>e.show.id===o)){const e=browsedMovies.find(e=>e.show.id===o);favMovies.push(e),localStorage.setItem("movies",JSON.stringify(favMovies))}else{const e=favMovies.find(e=>e.show.id===o),t=favMovies.indexOf(e);favMovies.splice(t,1),localStorage.setItem("movies",JSON.stringify(favMovies))}addFavourite(),getMovie(),addListItem()}function addListener(){const e=document.querySelectorAll(".js-movie");for(const o of e)o.addEventListener("click",selectFavourite)}function addFavourite(){let e="";for(let o=0;o<favMovies.length;o++)e+=`<li class="js-fav-item js-fav${o} favourite__list__item">`,e+=`<img class="js-fav-img${o} favourite__list__img" `,null===favMovies[o].show.image?e+='src= "https://via.placeholder.com/210x295/ffffff/666666/?text=Image"':e+=`src="${favMovies[o].show.image.medium}"`,e+=`alt="${favMovies[o].show.name}" title="${favMovies[o].show.name}">`,e+=favMovies[o].show.name,e+=`<button class="favourite__list__btn js-delete-btn" id=${favMovies[o].show.id}>X</button>`,e+="<li>";favList.innerHTML=e,addRemoveListener()}let browsedMovies=[],favMovies=[];function getMoviesFromLocal(){const e=JSON.parse(localStorage.getItem("movies"));null!==e?(favMovies=e,addFavourite()):favMovies=[]}getMoviesFromLocal();const btn=document.querySelector(".js-btn");function getMovie(){const e=document.querySelector(".js-input").value;fetch("//api.tvmaze.com/search/shows?q="+e).then((function(e){return e.json()})).then((function(e){browsedMovies=e,addListItem(),addListener()}))}function addListItem(){movieList.innerHTML="";for(let e=0;e<browsedMovies.length;e++){let o="";o+="<li ",o+='class="';const t=parseInt(browsedMovies[e].show.id),s=favMovies.find(e=>e.show.id===t);console.log(s),void 0===s?(o+="",console.log("en el if")):(o+="selected ",console.log("en el else")),o+=`js-movie js-movie${e} movie__list__item" id="${browsedMovies[e].show.id}">`,o+=`<img class="js-movie-img${e} movie__list__img" `,null===browsedMovies[e].show.image?o+='src= "https://via.placeholder.com/210x295/ffffff/666666/?text=Image"':o+="src = "+browsedMovies[e].show.image.medium,o+=` alt="${browsedMovies[e].show.name}" title="${browsedMovies[e].show.name}">`,o+=`<h3 class="movie__list__name">${browsedMovies[e].show.name}</h3>`,o+="</li>",movieList.innerHTML+=o}}function removeFavourite(e){const o=parseInt(e.currentTarget.id),t=favMovies.find(e=>e.show.id===o);console.log(t);const s=favMovies.indexOf(t);favMovies.splice(s,1),localStorage.setItem("movies",JSON.stringify(favMovies)),e.preventDefault,addFavourite(),getMovie(),addListItem()}function addRemoveListener(){const e=document.querySelectorAll(".js-delete-btn");for(const o of e)o.addEventListener("click",removeFavourite)}btn.addEventListener("click",getMovie);const delButton=document.querySelector(".js-delete-all");function deleteAll(){favMovies=[],localStorage.clear(),addFavourite(),getMovie()}delButton.addEventListener("click",deleteAll);