import { ButtonPadding, ButtonSize } from './Button.types';
import { getButtonPadding } from './Button.utils';

describe('buttonUtils', () => {
  describe('fn getButtonPadding', () => {
    // Default
    describe('when size is undefined', () => {
      it('should return ButtonPadding.medium', () => {
        const result = getButtonPadding();
        expect(result).toEqual(ButtonPadding.medium);
      });
    });

    // Error handling
    describe('when given an invalid size', () => {
      jest.spyOn(console, 'warn').mockImplementation();

      const size = 'invalid';
      const expectedWarning = `[ButtonComponent]: "${size}" is not a valid button size!`;
      const result = getButtonPadding(size as ButtonSize);

      it('should warn about invalid setting', () => {
        expect(console.warn).toHaveBeenCalledWith(
          expect.stringContaining(expectedWarning)
        );
      });

      it('should return ButtonPadding.medium', () => {
        expect(result).toEqual(ButtonPadding.medium);
      });
    });

    // Proper
    describe('when given a valid size', () => {
      const large = getButtonPadding('large');
      expect(large).toEqual(ButtonPadding.large);
      const medium = getButtonPadding('medium');
      expect(medium).toEqual(ButtonPadding.medium);
      const small = getButtonPadding('small');
      expect(small).toEqual(ButtonPadding.small);
    });
  });
});
