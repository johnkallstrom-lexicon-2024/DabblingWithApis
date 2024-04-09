import { getJSON, mapToDOM } from './util.js';

const base_url = 'https://deckofcardsapi.com/api/deck/';
const button = document.querySelector('#draw');

async function draw() {
  const response = await getJSON(`${base_url}/new/draw/?count=1`);
  if (response.success) {
    const imageUrl = response.cards[0].image;
    mapToDOM(imageUrl);
  }
}

button.addEventListener('click', draw);
