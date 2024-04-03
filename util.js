async function get(url) {
  const response = await fetch(url);
  try {
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

function display(characters) {
  let ul = document.getElementById('list');
  if (characters.length > 0) {
    ul.innerHTML = '';
    characters.forEach((c) => {
      ul.innerHTML += `<li>Name: ${c.name}</li>`;
      ul.innerHTML += `<li>Gender: ${c.gender}</li>`;
      ul.innerHTML += `<li>Height: ${c.height}</li>`;
      ul.innerHTML += `<li>Mass: ${c.mass}</li>`;
      ul.innerHTML += `<li>Hair color: ${c.hair_color}</li>`;
      ul.innerHTML += '<br>';
    });
  } else {
    ul.innerHTML = 'No search results found';
  }
}

export { get, display };
