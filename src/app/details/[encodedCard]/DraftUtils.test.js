import {getDraftTitle} from './DraftUtils';

describe('DraftUtils', () => {
  describe('sortByColor()', () => {
    it('strips vrd archives', () => {
      expect(getDraftTitle({draft: 'VRD Archives - Foo'})).toEqual('Foo');
    });

    it('adds a space before numbers', () => {
      expect(getDraftTitle({draft: 'VRD Archives - Foo21'})).toEqual('Foo 21');
    });

    it('adds space between Pascal Cased words', () => {
      expect(getDraftTitle({draft: 'VRD Archives - FooBar21'})).toEqual('Foo Bar 21');
    });

    it('keeps INITS together', () => {
      expect(getDraftTitle({draft: 'VRD Archives - DIS21'})).toEqual('Dis 21');
    });

    it('keeps two letter capped titles together', () => {
      expect(getDraftTitle({draft: 'VRD Archives - GG21'})).toEqual('GG 21');
    });

    it('allows for INITStrings to show separated', () => {
      expect(getDraftTitle({draft: 'VRD Archives - STLPresents21'})).toEqual('Stl Presents 21');
    });
  });
});
