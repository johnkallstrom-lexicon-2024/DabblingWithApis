import { get, display } from './util.js';

const base_url = 'https://www.swapi.tech/api/';

async function getCharacters() {
  const response = await get(`${base_url}/people`);
  if (response.message === 'ok' && response.results !== undefined) {
    const characters = response.results.map((item) => {
      return {
        id: item.uid,
        name: item.name,
      };
    });
    display(characters);
  }
}

async function getCharacterByName(name) {
  const response = await get(`${base_url}/people?name=${name}`);
  if (response.message === 'ok' && response.result !== undefined) {
    const character = response.result.map((item) => {
      return {
        id: item.uid,
        name: item.properties.name,
      };
    });
    display(character);
  }
}

document.getElementById('submit').addEventListener('click', () => {
  let query = document.getElementById('input').value;
  if (query === undefined || query === '') {
    getCharacters();
  } else {
    getCharacterByName(query);
  }
});
