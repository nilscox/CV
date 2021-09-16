import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      orange: string;
      blue: string;
      text: string;
      textBold: string;
      muted: string;
      body: string;
      border: string;
      icon: string;
      aside: string;
    };

    spaces: number[];

    fonts: {
      mono: string;
    };

    fontSizes: {
      default: string;
      small: string;
      big: string;
      section: string;
      title: string;
    };

    letterSpacings: {
      title: number;
    };

    lineHeights: {
      default: number;
      big: number;
    };
  }
}
