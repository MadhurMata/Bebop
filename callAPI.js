const callAPI = async () => {
  try {
    const callJson = `http://cors-anywhere.herokuapp.com/https://www.bebopstudio.es/test/test.json`;
    const responseJson = await fetch(callJson);
    return responseJson.json();
  } catch (error) { console.log(error) }
}
