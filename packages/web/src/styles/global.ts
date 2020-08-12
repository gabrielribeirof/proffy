import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${(props) => props.theme.background};
  }

  #app-mount {
    height: 100%;
  }

  body,
  input,
  button,
  textarea {
    font: 500 16px Poppins;
    color: ${(props) => props.theme.text.base};
  }
`;
