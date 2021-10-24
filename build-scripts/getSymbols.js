/* eslint-disable no-console */
const fs = require('fs');
const util = require('util');
const axios = require('axios');

fs.readFileAsync = util.promisify(fs.readFile);
fs.writeFileAsync = util.promisify(fs.writeFile);

async function getSymbols() {
  const axiosCall = await axios.get('https://api.scryfall.com/symbology');
  return axiosCall.data.data.reduce((a, c) => ({...a, [c.symbol]: c.svg_uri}), {});
}

getSymbols().then(sortedSymbols => {
  fs.writeFile(`${process.cwd()}/src/decks/symbols.json`, JSON.stringify(sortedSymbols, null, 2), (err) => {
    if (err) {
      throw err;
    }
  });
});
