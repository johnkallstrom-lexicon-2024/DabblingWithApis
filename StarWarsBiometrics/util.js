class util {
  static async getJSON(url) {
    const response = await fetch(url);
    try {
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }

  static mapToDOM(people) {
    const ul = document.querySelector('#list');
    ul.innerHTML = '';

    people.forEach((p) => {
      const id = document.createElement('li');
      id.innerText = p.id;
      ul.appendChild(id);

      const name = document.createElement('li');
      name.innerText = p.name;
      ul.appendChild(name);

      const height = document.createElement('li');
      height.innerText = p.height;
      ul.appendChild(height);

      const mass = document.createElement('li');
      mass.innerText = p.mass;
      ul.appendChild(mass);

      const gender = document.createElement('li');
      gender.innerText = p.gender;
      ul.appendChild(gender);

      const hair_color = document.createElement('li');
      hair_color.innerText = p.hair_color;
      ul.appendChild(hair_color);

      const br = document.createElement('br');
      ul.appendChild(br);
    });
  }
}

export default util;
