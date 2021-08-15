import { Theme } from '@emotion/react';

export const theme: Theme = {
  colors: {
    orange: '#cc6600',
    blue: '#006699',
    text: '#333333',
    muted: '#666666',
    body: '#F6F6F6',
    border: '#CCCCCC',
    icon: '#999999',
    aside: '#F0F0F0',
  },

  spaces: [0, 4, 8, 16, 32],

  fonts: {
    mono: "'JetBrains Mono', 'Courier New', Courier, monospace",
  },

  fontSizes: {
    default: '12px',
    small: '0.8rem',
    big: '1.2rem',
    section: '1.4rem',
    title: '2.4rem',
  },

  letterSpacings: {
    title: 2,
  },

  lineHeights: {
    default: 1.3,
    big: 1.4,
  },
};

const helper = <Args extends unknown[], Result extends string | number>(
  cb: (theme: Theme, ...args: Args) => Result,
) => {
  // prettier-ignore
  return (...args: Args) => ({ theme }: { theme: Theme }) => cb(theme, ...args);
};

export const color = helper((theme, color: keyof Theme['colors']) => {
  return theme.colors[color];
});

export const space = helper((theme, ...values: number[]) => {
  return values.map((value) => theme.spaces[value] + 'px').join(' ');
});

export const fontSize = helper((theme, fontSize: keyof Theme['fontSizes']) => {
  return theme.fontSizes[fontSize];
});

export const letterSpacing = helper((theme, letterSpacing: keyof Theme['letterSpacings']) => {
  return theme.letterSpacings[letterSpacing];
});

export const lineHeight = helper((theme, lineHeight: keyof Theme['lineHeights']) => {
  return theme.lineHeights[lineHeight];
});
