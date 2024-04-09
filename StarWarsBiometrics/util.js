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

  static mapToDOM(data) {
    console.log('mapToDOM function ran...');
  }
}

export default util;
