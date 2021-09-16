import { css, Theme } from '@emotion/react';

export const themeColors = css`
  html {
    --theme-color-orange: #cc6600;
    --theme-color-blue: #006699;
    --theme-color-text: #333333;
    --theme-color-textBold: #444444;
    --theme-color-muted: #666666;
    --theme-color-body: #f6f6f6;
    --theme-color-border: #cccccc;
    --theme-color-icon: #999999;
    --theme-color-aside: #f0f0f0;

    @media print {
      /* --theme-color-orange: #333333; */
      /* --theme-color-blue: #333333; */
      --theme-color-body: white;
      --theme-color-aside: white;
    }
  }
`;

export const theme: Theme = {
  colors: {
    orange: 'var(--theme-color-orange)',
    blue: 'var(--theme-color-blue)',
    text: 'var(--theme-color-text)',
    textBold: 'var(--theme-color-textBold)',
    muted: 'var(--theme-color-muted)',
    body: 'var(--theme-color-body)',
    border: 'var(--theme-color-border)',
    icon: 'var(--theme-color-icon)',
    aside: 'var(--theme-color-aside)',
  },

  spaces: [0, 4, 8, 16, 32],

  fonts: {
    mono: "'JetBrains Mono', 'Liberation Mono', 'Courier New', Courier, monospace",
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
