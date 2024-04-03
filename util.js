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
  ul.innerHTML = '';
  characters.forEach((c) => {
    ul.innerHTML += `<li>${c.name}</li>`;
  });
}

export { get, display };
