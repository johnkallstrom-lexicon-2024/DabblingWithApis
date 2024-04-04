import { get, display } from './util.js';

const base_url = 'https://deckofcardsapi.com/api/deck/';
const button = document.querySelector('#draw');

async function draw() {
  const response = await get(`${base_url}/new/draw/?count=1`);
  if (response.success) {
    const imageUrl = response.cards[0].image;
    display(imageUrl);
  }
}

button.addEventListener('click', draw);
