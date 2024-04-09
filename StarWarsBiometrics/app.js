import swapiService from './swapiService.js';
import util from './util.js';

const button = document.querySelector('#submit');
var service = new swapiService();

button.addEventListener('click', async () => {
  let people = null;
  let query = document.getElementById('input').value;

  if (query === undefined || query === '') {
    people = await service.getPeople();
  } else {
    people = await service.getPeopleByName(query);
  }

  // Map to DOM
  util.mapToDOM(people);
});
