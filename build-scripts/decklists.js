/* eslint-disable no-console */
const fs = require('fs');
const util = require('util');
const axios = require('axios');

fs.readFileAsync = util.promisify(fs.readFile);
fs.writeFileAsync = util.promisify(fs.writeFile);

async function getCards(dirtyLists) {
  const cards = {};
  await dirtyLists.reduce(async(previousDeck, dirtyDeck) => {
    await previousDeck;
    const axiosCalls = await dirtyDeck.decklist.reduce(async(prev, card) => {
      await prev;
      if (cards[card]) {
        console.log(`skipping ${card}`);
        return Promise.resolve();
      }
      console.log(`making call for ${card}`);
      await new Promise(resolve => setTimeout(resolve, 100));
      const axiosCall = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${card}`);
      cards[card] = axiosCall.data;
      return axiosCall;
    }, Promise.resolve());
    return axiosCalls;
  }, Promise.resolve());
  return cards;
}

function getCardImage(processedCard) {
  if (processedCard.image_uris) {
    return processedCard.image_uris.normal;
  }
  if (processedCard.card_faces) {
    return processedCard.card_faces[0].image_uris.normal;
  }
  return 'https://c1.scryfall.com/file/scryfall-cards/normal/front/5/8/5865603c-0a5e-45c3-84e3-2dc3b4cf0cf7.jpg?1562915786';
}

function getCardColors(processedCard) {
  if (processedCard.card_faces) {
    return [...new Set(processedCard.card_faces.reduce((a, c) => [...a, ...c.colors], []))];
  }
  if (processedCard.colors) {
    return processedCard.colors;
  }
  return [];

}

function buildCard(dirtyCard) {
  return {
    name: dirtyCard.name,
    image: getCardImage(dirtyCard),
    uri: dirtyCard.scryfall_uri,
    type: dirtyCard.type_line,
    cmc: dirtyCard.cmc,
    colors: getCardColors(dirtyCard),
  };
}

fs.readFileAsync(`${process.cwd()}/src/decks/decklists.json`, 'utf-8').then((dirtyLists) => {
  const parsedDirtyLists = JSON.parse(dirtyLists);
  getCards(parsedDirtyLists).then(processedCards => {
    const cleanLists = parsedDirtyLists.map(dirtyList => ({
      ...dirtyList,
      decklist: dirtyList.decklist.map((dirtyCard) => buildCard(processedCards[dirtyCard])),
    }));
    fs.writeFile(`${process.cwd()}/src/decks/processedDecklists.json`, JSON.stringify(cleanLists, null, 2), (err) => {
      if (err) {
        throw err;
      }
    });
  });
}).catch((e) => {
  console.log('There was an error reading decklists.json');
  console.log(e);
});