import { fetchCharacters } from "../../index.js";
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

export default function Pagination(prevButton, nextButton, fetchCharacters) {
  let maxPage = 42;
  let page = 1;
  pagination.textContent = page + " / " + maxPage;

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
}
Pagination(prevButton, nextButton, fetchCharacters);
