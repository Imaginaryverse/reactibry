import { createClassName } from './stringUtils';

describe('stringUtils', () => {
  describe('fn createClassName', () => {
    describe('when custom is undefined', () => {
      it('should return string containing prefix only', () => {
        const prefix = 'prefix';
        const result = createClassName(prefix, undefined);
        expect(result.length).toEqual(prefix.length);
        expect(result).toEqual(prefix);
      });
    });

    describe('when custom is defined', () => {
      it('should return string containing prefix and custom', () => {
        const prefix = 'prefix';
        const custom = 'custom';
        const spaceLen = 1;
        const result = createClassName(prefix, custom);
        expect(result.length).toEqual(prefix.length + spaceLen + custom.length);
        expect(result).toEqual(`${prefix} ${custom}`);
      });
    });
  });
});
