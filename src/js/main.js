'use strict';
//HTML
const btnSearch = document.querySelector('.js-search');
const btnReset = document.querySelector('.js-reset');
const inputSearch = document.querySelector('.js-input');
const cardsSection = document.querySelector('.js-cardContainer');
const favoriteSection = document.querySelector('.js-favouriteContainer');

//Arrays
let favorites = [];
let results = [];

//Functions
function handleClickResults(event) {
  event.preventDefault();
  const inputValue = inputSearch.value;
  fetch(`https://api.jikan.moe/v3/search/anime?q=${inputValue}`)
    .then((response) => response.json())
    .then((dataFromAPI) => {
      results = dataFromAPI.results;
      renderAllCards(results);
    });
}
function renderCard(dataCard) {
  let articleClass = 'gray';
  let nameClass = 'gray';
  const indexResult = favorites.findIndex((favorite) => dataCard.mal_id === parseInt(favorite.id));
  if (indexResult !== -1) {
    articleClass = 'favourite_border';
    nameClass = 'favourite_color';
  }
  cardsSection.innerHTML += `
    <article class="results__container--card ${articleClass} js-card" data-name="${
    dataCard.title
  }" data-img="${dataCard.image_url}" data-id="${dataCard.mal_id}">
    <img class="img"
        src="${dataCard.image_url || 'https://via.placeholder.com/200x250/ffffff/666666/?text=img'}"
        alt="caratula de la serie" />
    <h3 class="name ${nameClass} js-name">${dataCard.title}</h3>
</article>`;
}

function renderAllCards(cards) {
  cardsSection.innerHTML = '';
  if (cards === undefined) {
    cardsSection.innerHTML += `<p class="results__container--text">Ha ocurrido un error. No hemos encontrado resultados para tu búsqueda.</p>`;
  } else if (cards.length === 0) {
    cardsSection.innerHTML += `<p class="results__container--text">No hay resultados para tu búsqueda.</p>`;
  } else {
    for (const card of cards) {
      renderCard(card);
    }
    const allCards = document.querySelectorAll('.js-card');
    for (const card of allCards) {
      card.addEventListener('click', handleClickCard);
    }
  }
}

function handleClickResetResults(event) {
  event.preventDefault();
  inputSearch.value = '';
  cardsSection.innerHTML = '';
  results = [];
}

function handleClickCard(event) {
  const selectedCard = event.currentTarget;
  selectedCard.classList.remove('gray');
  selectedCard.classList.add('favourite_border');
  selectedCard.querySelector('.js-name').classList.remove('gray');
  selectedCard.querySelector('.js-name').classList.add('favourite_color');
  const favoriteData = {
    name: selectedCard.dataset.name,
    url: selectedCard.dataset.img,
    id: selectedCard.dataset.id,
  };
  const indexResult = favorites.findIndex((favoriteCard) => favoriteCard.id === favoriteData.id);
  if (indexResult === -1) {
    favorites.push(favoriteData);
    renderAllFavorites(favorites);
  }
}

function renderFavoriteCard(favoriteItem) {
  favoriteSection.innerHTML += `<article class="favorites__container--card" data-id="${favoriteItem.id}">
  <img class="img"
      src="${favoriteItem.url}"
      alt="caratula de la serie" />
  <h3 class="title">${favoriteItem.name}
  </h3>
  <button class="esc js-btnEsc"><i class="icon fas fa-times"></i></button>
</article>
    `;
}

function renderAllFavorites(favorites) {
  favoriteSection.innerHTML = '';
  if (favorites.length === 0) {
    favoriteSection.innerHTML += `<p class="favorites__container--text">Aún no tienes ningún favorito añadido.</p>`;
  } else {
    for (const favoriteItem of favorites) {
      renderFavoriteCard(favoriteItem);
    }
    const allBtnEsc = document.querySelectorAll('.js-btnEsc');
    for (const btnEsc of allBtnEsc) {
      btnEsc.addEventListener('click', handleClickBtnEsc);
    }
  }
}

function handleClickBtnEsc(event) {
  const selectedFavouriteCard = event.currentTarget.parentNode;

  const indexResult = favorites.findIndex(
    (favorite) => selectedFavouriteCard.dataset.id === favorite.id
  );
  if (indexResult !== -1) {
    favorites.splice(indexResult, 1);
    renderAllFavorites(favorites);
    renderAllCards(results);
  }
}

//Listener
btnSearch.addEventListener('click', handleClickResults);
btnReset.addEventListener('click', handleClickResetResults);
