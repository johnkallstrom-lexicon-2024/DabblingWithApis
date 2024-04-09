import swapiService from './swapiService.js';
import util from './util.js';

const service = new swapiService();

const clear = document.querySelector('#clear');
const submit = document.querySelector('#submit');

async function search() {
  let people = null;
  let query = document.getElementById('input').value;

  if (query === undefined || query === '') {
    people = await service.getPeople();
  } else {
    people = await service.getPeopleByName(query);
  }

  util.mapToDOM(people);
}

submit.addEventListener('click', search);
clear.addEventListener('click', () =>
  util.clear(document.querySelector('#list'))
);
