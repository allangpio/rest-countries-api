import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      text: string;
      input: string;
      background: string;
      elements: string;
    }
  }
}
