async function getJSON(url) {
  const response = await fetch(url);
  try {
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

function mapToDOM(imageUrl) {
  const output = document.querySelector('#output');

  let img = document.createElement('img');
  img.setAttribute('src', imageUrl);
  img.classList.add('pt-3');

  output.innerHTML = '';
  output.appendChild(img);
}

export { getJSON, mapToDOM };
