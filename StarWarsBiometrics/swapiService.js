import util from './util.js';

class swapiService {
  #base_url = 'https://www.swapi.tech/api/';

  async getPeople() {
    const json = await util.getJSON(`${this.#base_url}/people`);
    const people = json.results.map((p) => {
      return {
        id: p.uid,
        name: p.name,
      };
    });
    return people;
  }

  async getPeopleByName(name) {
    const json = await util.getJSON(`${this.#base_url}/people?name=${name}`);
    const people = json.result.map((p) => {
      return {
        id: p.uid,
        name: p.properties.name,
        height: p.properties.height,
        mass: p.properties.mass,
        gender: p.properties.gender,
        hair_color: p.properties.hair_color,
      };
    });
    return people;
  }
}

export default swapiService;
