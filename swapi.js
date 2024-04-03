import { get } from './util.js';

const base_url = 'https://www.swapi.tech/api/';

async function getCharacters() {
  const response = await get(`${base_url}/people`);
  console.log(response);
}

async function getCharacterByName(name) {
  let response;
  if (name !== undefined) {
    response = await get(`${base_url}/people?name=${name}`);
  }
  console.log(response);
}

getCharacters();
getCharacterByName('luke');
