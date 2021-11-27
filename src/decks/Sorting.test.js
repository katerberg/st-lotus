import {colorOrder, sortByColor, sortByCmc} from './Sorting';

describe('Sorting', () => {
  function makeCard(colors = [], type = '', displayName, cmc = 0, pickOrder) {
    return {
      colors,
      type,
      displayName: displayName !== undefined ? displayName : `${Math.random()}`,
      cmc,
      pickOrder: pickOrder !== undefined ? pickOrder : Math.floor(Math.random() * 100000000),
    };
  }

  describe('sortByColor()', () => {
    it('groups by color, sorting groups by CWUBRGML', () => {
      const decklist = [
        makeCard(['U']),
        makeCard(['U', 'G']),
        makeCard(['B', 'G']),
        makeCard(['U']),
        makeCard(['G']),
        makeCard(['W']),
        makeCard(['W']),
        makeCard(['B']),
        makeCard(['B']),
        makeCard(['B']),
        makeCard(['R']),
        makeCard([], 'Land'),
        makeCard([], 'Artifact'),
        makeCard([], 'Artifact'),
      ];

      const result = sortByColor(decklist);

      expect(result).toHaveLength(8);
      colorOrder.forEach((val, i) => {
        expect(result[i].title).toEqual(val);
      });
    });

    it('sub sorts by cmc, then displayName', () => {
      const decklist = [
        makeCard(['U'], '', '', 4),
        makeCard(['U', 'G'], '', 'Xantid Swarm', 0),
        makeCard(['B', 'G'], '', 'Raging Goblin', 0),
        makeCard(['U'], '', '', 2),
      ];

      const [blue, multiColored] = sortByColor(decklist);

      expect(blue.cards[0]).toEqual(decklist[3]);
      expect(blue.cards[1]).toEqual(decklist[0]);
      expect(multiColored.cards[0]).toEqual(decklist[2]);
      expect(multiColored.cards[1]).toEqual(decklist[1]);
    });

    it('groups lands seperately from colorless non-lands', () => {
      const decklist = [
        makeCard([], 'Legendary Land'),
        makeCard([], 'Land'),
        makeCard([], 'Artifact Land'),
        makeCard([], 'Artifact Creature'),
      ];

      const result = sortByColor(decklist);

      expect(result[0].title).toEqual('C');
      expect(result[0].cards.length).toEqual(1);
      expect(result[1].title).toEqual('L');
      expect(result[1].cards.length).toEqual(3);
    });
  });

  describe('sortByCmc()', () => {
    it('groups by cmc, sorting groups numerically', () => {
      const decklist = [
        makeCard([], '', '', 5),
        makeCard([], '', '', 9),
        makeCard([], '', '', 3),
        makeCard([], '', '', 1),
        makeCard([], '', '', 5),
        makeCard([], '', '', 2),
        makeCard([], '', '', 0),
      ];

      const result = sortByCmc(decklist);

      expect(result).toHaveLength(6);
      expect(result[0].title).toEqual('0');
      expect(result[1].title).toEqual('1');
      expect(result[2].title).toEqual('2');
      expect(result[3].title).toEqual('3');
      expect(result[4].title).toEqual('5');
      expect(result[5].title).toEqual('9');
    });

    it('sub sorts by displayName', () => {
      const decklist = [
        makeCard([], '', 'Arid Mesa', 0),
        makeCard([], '', 'Verdant Catacombs', 0),
        makeCard([], '', 'Plateau', 0),
      ];

      const [result] = sortByCmc(decklist);

      expect(result.cards[0]).toEqual(decklist[0]);
      expect(result.cards[1]).toEqual(decklist[2]);
      expect(result.cards[2]).toEqual(decklist[1]);
    });
  });
});
