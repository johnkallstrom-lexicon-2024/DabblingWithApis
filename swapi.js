import { get, map } from './util.js';

const base_url = 'https://www.swapi.tech/api/';

async function getCharacters(name) {
  const response = await get(`${base_url}/people?name=${name}`);
  if (response.message === 'ok') {
    let characters;
    if (response.result !== undefined) {
      characters = map(response.result);
    } else {
      characters = response.results;
    }
    console.log(characters);
  }
}

getCharacters('R2');
