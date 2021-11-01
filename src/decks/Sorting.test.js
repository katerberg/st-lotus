import {colorOrder, sortByColor} from './Sorting';

describe('Sorting', () => {
  describe('sortByColor()', () => {
    function makeCard(colors = [], type = '', name, cmc = 0, pickOrder) {
      return {
        colors,
        type,
        name: name !== undefined ? name : `${Math.random()}`,
        cmc,
        pickOrder: pickOrder !== undefined ? pickOrder : Math.floor(Math.random() * 100000000),
      };
    }

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

    it('sub sorts by cmc, then name', () => {
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
});
