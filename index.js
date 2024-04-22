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

async function fetchCharacters() {
  try {
    const apiURL = "https://rickandmortyapi.com/api/character";
    const response = await fetch(apiURL);
    const { results } = await response.json();

    cardContainer.innerHTML = "";
    results.forEach((character) => {
      const card = CharacterCard(character);
      cardContainer.append(card);
    });

    console.log(results);
  } catch (error) {
    console.error("Error fetching characters", error);
  }
}

fetchCharacters();
