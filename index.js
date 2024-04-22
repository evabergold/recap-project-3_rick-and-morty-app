import CharacterCard from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const baseURL = "https://rickandmortyapi.com/api/character";

async function fetchCharacters(name = "") {
  const url = `${baseURL}?page=${page}&name=${encodeURIComponent(name)}`;

  try {
    const response = await fetch(baseURL);
    const { results, info } = await response.json();

    cardContainer.innerHTML = "";

    results.forEach((character) => {
      const card = CharacterCard(character);
      cardContainer.appendChild(card);
    });

    console.log(results);

    // updatePagination(info);
  } catch (error) {
    console.error("Error fetching characters: ", error);
  }
}

// Call fetchCharacters initially to load the first page
fetchCharacters();
