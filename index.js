import CharacterCard from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"] input');
const navigation = document.querySelector('[data-js="navigation"]');

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters(page, searchQuery = "") {
  try {
    const apiURL = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;
    const response = await fetch(apiURL);
    const { info, results } = await response.json();
    maxPage = info.pages;
    pagination.textContent = page + " / " + maxPage;
    renderCharacters(results);
    console.log(info, results);
  } catch (error) {
    console.error("Error fetching characters", error);
  }
}

function renderCharacters(characters) {
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const card = CharacterCard(character);
    cardContainer.append(card);
  });
}

fetchCharacters(page);

prevButton.addEventListener("click", (event) => {
  console.log("prev button clicked");
  if (page > 1) {
    page--;
    console.log("page:", page);
    fetchCharacters(page);
    pagination.textContent = page + " / " + maxPage;
    console.log("pagination value: ", page);
  }
});

nextButton.addEventListener("click", (event) => {
  console.log("next button clicked");
  if (page < maxPage) {
    page++;
    console.log("page:", page);
    fetchCharacters(page);
    pagination.textContent = page + " / " + maxPage;
    console.log("pagination value: ", page);
  }
});

searchBarContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  let searchQuery = searchBar.value;
  console.log("Search query: ", searchQuery);
  fetchCharacters(page, searchQuery);
});
