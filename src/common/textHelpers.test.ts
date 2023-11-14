import {docsLinkToCsv} from './textHelpers';

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
});
