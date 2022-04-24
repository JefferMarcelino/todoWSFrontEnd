async function fecthData(url, callback) {
  const response = await fetch(url);
  const json = await response.json();
  callback(json);
}

export default fecthData;
