/* eslint-disable no-console */
import * as fs from 'fs';
import * as util from 'util';
import * as rax from 'retry-axios';
import axios from 'axios';

rax.attach();

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const unlinkAsync = util.promisify(fs.unlink);

async function getCards(dirtyLists) {
  const cards = {};
  await dirtyLists.reduce(async(previousDeck, dirtyDeck) => {
    await previousDeck;
    const axiosCalls = await dirtyDeck.decklist.concat(dirtyDeck.sideboard).reduce(async(prev, [, listCard]) => {
      const card = listCard?.toLowerCase();
      await prev;
      if (cards[card]) {
        // skipping ${card}
        return Promise.resolve();
      }
      console.log(`making call for ${card}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const config = {
        raxConfig: {
          retry: 10,
          noResponseRetries: 10,
          onRetryAttempt: err => {
            console.log(`Retry attempt #${rax.getConfig(err).currentRetryAttempt}`);
          },
        },
        timeout: 10000,
      };
      const axiosCall = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(card)}`, config);
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
  if (processedCard.card_faces && processedCard.card_faces.some(cf => cf.colors)) {
    return [...new Set(processedCard.card_faces.reduce((a, c) => [...a, ...c.colors], []))];
  }
  if (processedCard.colors) {
    return processedCard.colors;
  }
  return [];

}

function getCardDisplayName(processedCard) {
  if (processedCard.card_faces) {
    return processedCard.card_faces[0].name;
  }
  return processedCard.name;
}

function getManaCost(processedCard) {
  if (processedCard.card_faces) {
    return processedCard.card_faces[0].mana_cost;
  }
  return processedCard.mana_cost;
}

function buildCard(rawCardName, processedCard, pickOrder) {
  console.log('building card', rawCardName, processedCard, pickOrder)
  return {
    apiName: rawCardName,
    displayName: getCardDisplayName(processedCard),
    image: getCardImage(processedCard),
    uri: processedCard.scryfall_uri,
    type: processedCard.type_line,
    cmc: processedCard.cmc,
    manaCost: getManaCost(processedCard),
    colors: getCardColors(processedCard),
    pickOrder,
  };
}

const processedCardsPath = `${process.cwd()}/tmp/processedCards.json`;
readFileAsync(`${process.cwd()}/src/decklists.json`, 'utf-8').then(async (dirtyLists) => {
  const parsedDirtyLists = JSON.parse(dirtyLists);
  let processedCards;
  try {
    const rawCards = await readFileAsync(processedCardsPath);
    processedCards = JSON.parse(rawCards);
  } catch (e) {
    console.log('No previous cards found, fetching new ones');
    processedCards = await getCards(parsedDirtyLists);
    await writeFileAsync(processedCardsPath, JSON.stringify(processedCards, null, 2), (err) => {
      if (err) {
        throw err;
      }
    });
  }
  const cleanLists = parsedDirtyLists.map(dirtyList => ({
    ...dirtyList,
    decklist: dirtyList.decklist.map(([pick, dirtyCard]) => buildCard(dirtyCard.toLowerCase(), processedCards[dirtyCard.toLowerCase()], pick)),
    sideboard: dirtyList.sideboard.map(([pick, dirtyCard]) => buildCard(dirtyCard.toLowerCase(), processedCards[dirtyCard.toLowerCase()], pick)),
  }));
  fs.writeFile(`${process.cwd()}/src/processedDecklists.json`, JSON.stringify(cleanLists, null, 2), (err) => {
    if (err) {
      throw err;
    }
  });
  const drafts = Object.keys(cleanLists.reduce((a, c) => ({...a, [c.stLotus]: true}), {}));

  drafts.forEach((draft) => {
    fs.writeFile(`${process.cwd()}/src/app/decks/decklists/vrd${draft}Decklists.json`, JSON.stringify(cleanLists.filter(c => `${c.stLotus}` === draft)), (err) => {
      if (err) {
        throw err;
      }
    });
  });
  unlinkAsync(processedCardsPath);
}).catch((e) => {
  console.log('There was an error reading decklists.json');
  console.log(e);
});
