async function get(url) {
  const response = await fetch(url);
  try {
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

function map(data) {
  const result = data.map((character) => {
    return {
      uid: character.uid,
      name: character.properties.name,
      url: character.properties.url,
    };
  });
  return result;
}

export { get, map };
