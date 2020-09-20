import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input {
    font: 16px 'Nunito', 'sans-serif';
    font-weight: 300;
  }

  h1, h2 {
    font-weight: 800;
  }

  h3, strong {
    font-weight: 600;
  }

  input {
    color: ${props => props.theme.colors.input}
  }
`;
