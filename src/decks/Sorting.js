
export const colorOrder = ['C', 'W', 'U', 'B', 'R', 'G', 'M', 'L'];

const getColorType = (card) => {
  if (card.colors.length === 0) {
    if (card.type.includes('Land')) {
      return 'L';
    }
    return 'C';
  }
  if (card.colors.length > 1) {
    return 'M';
  }
  return card.colors[0];
};

const sortGroupByColor = (a, b) => colorOrder.indexOf(a.title) - colorOrder.indexOf(b.title);

const sortByCmc = (a, b) => a.cmc - b.cmc;

const sortByName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export function sortByColor(decklist) {
  const grouped = decklist.reduce((a, c) => {
    const newAccumulator = {...a};
    const colorType = getColorType(c);
    if (newAccumulator[colorType] === undefined) {
      newAccumulator[colorType] = [];
    }
    newAccumulator[colorType].push(c);
    return newAccumulator;
  }, {});
  return Object.entries(grouped)
    .map(([colorType, cards]) => ({
      title: colorType,
      cards: cards.sort((a, b) => sortByCmc(a, b) || sortByName(a, b), []),
    }))
    .sort(sortGroupByColor, []);
}

const combined = {sortByColor, colorOrder};
export default combined;
