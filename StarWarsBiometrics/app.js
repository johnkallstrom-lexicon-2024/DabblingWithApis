import swapiService from './swapiService.js';
import util from './util.js';

const service = new swapiService();

const reset = document.querySelector('#reset');
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const output = document.querySelector('#list');

async function search() {
  let people = null;
  let query = input.value;

  if (query === undefined || query === '') {
    people = await service.getPeople();
  } else {
    people = await service.getPeopleByName(query);
  }

  util.mapToDOM(people);
}

submit.addEventListener('click', search);
reset.addEventListener('click', () => util.clearElements([input, output]));
