async function get(url) {
  const response = await fetch(url);
  try {
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export { get };
