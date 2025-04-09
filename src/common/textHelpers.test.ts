import { csvToPicks, docsLinkToCsv } from './textHelpers';

describe('textHelpers', () => {
  describe('docsLinkToCsv()', () => {
    it('converts valid google docs link', () => {
      const input = 'https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=1008615612';
      expect(docsLinkToCsv(input)).toEqual('https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/export?format=csv&gid=1008615612');
    });

    it('ignores gid if not given', () => {
      const input = 'https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit';
      expect(docsLinkToCsv(input)).toEqual('https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/export?format=csv');
    });

    it('trims', () => {
      const input = ' https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/edit#gid=1008615612   ';
      expect(docsLinkToCsv(input)).toEqual('https://docs.google.com/spreadsheets/d/1AdrhWkDX7i9p2rZbEKzDs3nQAhCvcH0LAXZQNwWMsnA/export?format=csv&gid=1008615612');
    });

    it('hands back empty string for empty input', () => {
      expect(docsLinkToCsv('')).toEqual('');
    });
  });

  describe('csvToPicks()', () => {
    it('handles vrd archive draft, stripping out rows without data', () => {
      const input = [
        {
          "": "Date",
          "trashboat6824": "2023-08-01",
          "bensonericb": "",
          "xxxmason1337xxx": "",
          "wanderingwinder": "",
          "everbrink": "",
          "masterplum": "",
          "sphagan": "",
          "jasterrogue7": ""
        },
        {
          "": "7",
          "trashboat6824": "Narset, Parter of Veils",
          "bensonericb": "Thassa's Oracle",
          "xxxmason1337xxx": "Wooded Foothills",
          "wanderingwinder": "Flooded Strand",
          "everbrink": "Scalding Tarn",
          "masterplum": "Caves of Chaos Adventurer",
          "sphagan": "Lightning Bolt",
          "jasterrogue7": "Windswept Heath"
        },
        {
          "": "  ",
          "trashboat6824": "Timetwister",
          "bensonericb": "Bloodstained Mire",
          "xxxmason1337xxx": "Sheoldred, the Apocalypse",
          "wanderingwinder": "Marsh Flats",
          "everbrink": "Pyroblast",
          "masterplum": "Brazen Borrower",
          "sphagan": "Fable of the Mirror-Breaker",
          "jasterrogue7": "Veil of Summer"
        },
        {
          "": ">>>",
          "trashboat6824": "Sol Ring",
          "bensonericb": "Mox Pearl",
          "xxxmason1337xxx": "Swamp",
          "wanderingwinder": "Island",
          "everbrink": "Wastes",
          "masterplum": "Lightning Strike",
          "sphagan": "Dismal Backwater",
          "jasterrogue7": "Relentless Dead"
        },
        {
          "": "The cards are all unique",
          "trashboat6824": "Mountain",
          "bensonericb": "Goblin Guide",
          "xxxmason1337xxx": "Goblin Grenade",
          "wanderingwinder": "Goblin Hero",
          "everbrink": "Goblin Recruiter",
          "masterplum": "Goblin Rabblemaster",
          "sphagan": "Goblin Warchief",
          "jasterrogue7": "Goblin Warlord"
        },
      ]

      const result = csvToPicks(input);

      expect(result.length).toEqual(32);
      expect(result).toContain('marsh flats');
      expect(result).toContain("thassa's oracle");
      expect(result).toContain("wastes");
      expect(result).toContain("goblin warchief");

    });

    it('handles discord draft', () => {
      const input = [
        {
          "": "",
          "alex": "Black Lotus",
          "hyphenated": "Ancestral Recall",
          "trashboat6824": "Mana Crypt",
          "itsmejuri": "Time Walk",
          "thekniphoon": "Mox Sapphire",
          "sphagan": "Mox Ruby",
          "bensonericb": "Mox Jet",
          "sti1983": "Mox Emerald"
        },
        {
          "": "",
          "alex": "Vampiric Tutor",
          "hyphenated": "Mox Diamond",
          "trashboat6824": "White Plume Adventurer",
          "itsmejuri": "Time Vault",
          "thekniphoon": "Force of Will",
          "sphagan": "Ragavan, Nimble Pilferer",
          "bensonericb": "Sol Ring",
          "sti1983": "Mox Pearl"
        },
      ];
      const result = csvToPicks(input);

      expect(result.length).toEqual(16);
      expect(result).toContain('mox emerald');
      expect(result).toContain("mox diamond");
    })
  });
});