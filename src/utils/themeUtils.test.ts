import {
  TransitionSpeed,
  TransitionSpeedSetting,
  CornerRoundness,
  CornerRoundnessSetting,
  BoxShadow,
  BoxShadowSetting,
  TextShadow,
  TextShadowSetting,
} from '../theme/types';
import {
  getBoxShadow,
  getCornerRoundness,
  getTextShadow,
  getTransitionSpeed,
} from './themeUtils';

describe('themeUtils', () => {
  /* getTransitionSpeed */
  describe('fn getTransitionSpeed', () => {
    // Default
    describe('when setting is undefined', () => {
      it('should return TransitionSpeed.instant', () => {
        const result = getTransitionSpeed();
        expect(result).toEqual(TransitionSpeed.instant);
      });
    });

    // Error handling
    describe('when given an invalid setting', () => {
      jest.spyOn(console, 'warn').mockImplementation();
      jest.spyOn(console, 'log').mockImplementation();

      const setting = 'invalid';
      const expectedWarning = `[ThemeProvider]: "${setting}" is not a valid transition speed setting!`;
      const expectedLog = `[ThemeProvider]: visit [LINK TO DOCS] for more information.`;
      const result = getTransitionSpeed(setting as TransitionSpeedSetting);

      it('should warn about invalid setting', () => {
        expect(console.warn).toHaveBeenCalledWith(
          expect.stringContaining(expectedWarning)
        );
      });

      it('should log a link to docs', () => {
        expect(console.log).toHaveBeenCalledWith(
          expect.stringContaining(expectedLog)
        );
      });

      it('should return TransitionSpeed.instant', () => {
        expect(result).toEqual(TransitionSpeed.instant);
      });
    });

    // Proper
    describe('when given a valid setting', () => {
      it('should return the appropriate transition speed string', () => {
        const instant = getTransitionSpeed('instant');
        expect(instant).toEqual(TransitionSpeed.instant);
        const faster = getTransitionSpeed('faster');
        expect(faster).toEqual(TransitionSpeed.faster);
        const fast = getTransitionSpeed('fast');
        expect(fast).toEqual(TransitionSpeed.fast);
        const medium = getTransitionSpeed('medium');
        expect(medium).toEqual(TransitionSpeed.medium);
        const slow = getTransitionSpeed('slow');
        expect(slow).toEqual(TransitionSpeed.slow);
        const slower = getTransitionSpeed('slower');
        expect(slower).toEqual(TransitionSpeed.slower);
      });
    });
  });

  /* getCornerRoundness */
  describe('fn getCornerRoundness', () => {
    // Default
    describe('when setting is undefined', () => {
      it('should return CornerRoundness.none', () => {
        const result = getCornerRoundness();
        expect(result).toEqual(CornerRoundness.none);
      });
    });

    // Error handling
    describe('when given an invalid setting', () => {
      jest.spyOn(console, 'warn').mockImplementation();
      jest.spyOn(console, 'log').mockImplementation();

      const setting = 'invalid';
      const expectedWarning = `[ThemeProvider]: "${setting}" is not a valid corner roundness setting!`;
      const expectedLog = `[ThemeProvider]: visit [LINK TO DOCS] for more information.`;
      const result = getCornerRoundness(setting as CornerRoundnessSetting);

      it('should warn about invalid setting', () => {
        expect(console.warn).toHaveBeenCalledWith(
          expect.stringContaining(expectedWarning)
        );
      });

      it('should log a link to docs', () => {
        expect(console.log).toHaveBeenCalledWith(
          expect.stringContaining(expectedLog)
        );
      });

      it('should return CornerRoundness.none', () => {
        expect(result).toEqual(CornerRoundness.none);
      });
    });

    // Proper
    describe('when given a valid setting', () => {
      it('should return the appropriate corner roundness string', () => {
        const none = getCornerRoundness('none');
        expect(none).toEqual(CornerRoundness.none);
        const large = getCornerRoundness('large');
        expect(large).toEqual(CornerRoundness.large);
        const medium = getCornerRoundness('medium');
        expect(medium).toEqual(CornerRoundness.medium);
        const small = getCornerRoundness('small');
        expect(small).toEqual(CornerRoundness.small);
      });
    });
  });

  /* getBoxShadow */
  describe('fn getBoxShadow', () => {
    // Default
    describe('when setting is undefined', () => {
      it('should return BoxShadow.none', () => {
        const result = getBoxShadow();
        expect(result).toEqual(BoxShadow.none);
      });
    });

    // Error handling
    describe('when given an invalid setting', () => {
      jest.spyOn(console, 'warn').mockImplementation();
      jest.spyOn(console, 'log').mockImplementation();

      const setting = 'invalid';
      const expectedWarning = `[ThemeProvider]: "${setting}" is not a valid box shadow setting!`;
      const expectedLog = `[ThemeProvider]: visit [LINK TO DOCS] for more information.`;
      const result = getBoxShadow(setting as BoxShadowSetting);

      it('should warn about invalid setting', () => {
        expect(console.warn).toHaveBeenCalledWith(
          expect.stringContaining(expectedWarning)
        );
      });

      it('should log a link to docs', () => {
        expect(console.log).toHaveBeenCalledWith(
          expect.stringContaining(expectedLog)
        );
      });

      it('should return BoxShadow.none', () => {
        expect(result).toEqual(BoxShadow.none);
      });
    });

    // Proper
    describe('when given a valid setting', () => {
      it('should return the appropriate box shadow string', () => {
        const none = getBoxShadow('none');
        expect(none).toEqual(BoxShadow.none);
        const strong = getBoxShadow('strong');
        expect(strong).toEqual(BoxShadow.strong);
        const medium = getBoxShadow('medium');
        expect(medium).toEqual(BoxShadow.medium);
        const weak = getBoxShadow('weak');
        expect(weak).toEqual(BoxShadow.weak);
        const discrete = getBoxShadow('discrete');
        expect(discrete).toEqual(BoxShadow.discrete);
      });
    });
  });

  /* getTextShadow */
  describe('fn getTextShadow', () => {
    // Default
    describe('when setting is undefined', () => {
      it('should return TextShadow.none', () => {
        const result = getTextShadow();
        expect(result).toEqual(TextShadow.none);
      });
    });

    // Error handling
    describe('when given an invalid setting', () => {
      jest.spyOn(console, 'warn').mockImplementation();
      jest.spyOn(console, 'log').mockImplementation();

      const setting = 'invalid';
      const expectedWarning = `[ThemeProvider]: "${setting}" is not a valid text shadow setting!`;
      const expectedLog = `[ThemeProvider]: visit [LINK TO DOCS] for more information.`;
      const result = getTextShadow(setting as TextShadowSetting);

      it('should warn about invalid setting', () => {
        expect(console.warn).toHaveBeenCalledWith(
          expect.stringContaining(expectedWarning)
        );
      });

      it('should log a link to docs', () => {
        expect(console.log).toHaveBeenCalledWith(
          expect.stringContaining(expectedLog)
        );
      });

      it('should return TextShadow.none', () => {
        expect(result).toEqual(TextShadow.none);
      });
    });

    // Proper
    describe('when given a valid setting', () => {
      it('should return the appropriate text shadow string', () => {
        const none = getTextShadow('none');
        expect(none).toEqual(TextShadow.none);
        const strong = getTextShadow('strong');
        expect(strong).toEqual(TextShadow.strong);
        const medium = getTextShadow('medium');
        expect(medium).toEqual(TextShadow.medium);
        const weak = getTextShadow('weak');
        expect(weak).toEqual(TextShadow.weak);
        const discrete = getTextShadow('discrete');
        expect(discrete).toEqual(TextShadow.discrete);
      });
    });
  });
});
