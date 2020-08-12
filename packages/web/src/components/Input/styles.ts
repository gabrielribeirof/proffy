import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 14px;
  position: relative;

  :first-child {
    margin-top: 0;
  }

  @media (min-width: 700px) {
    :first-child {
      margin-top: 0;
    }
  }

  label {
    font-size: 14px;
  }

  input {
    width: 100%;
    height: 56px;
    padding: 0 16px;
    border: 1px solid ${(props) => props.theme.line.white};
    border-radius: 8px;
    outline: 0;

    background: ${(props) => props.theme.input.background};
    color: ${(props) => props.theme.text.title};
    font: 16px Poppins;
  }

  :focus-within::after {
    content: '';
    width: calc(100% - 32px);
    height: 2px;
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 0;

    background: ${(props) => props.theme.primary.lighter};
  }
`;
