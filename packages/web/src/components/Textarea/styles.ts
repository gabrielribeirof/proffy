import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 14px;
  position: relative;

  @media (min-width: 700px) {
    :first-child {
      margin-top: 0;
    }
  }

  label {
    font-size: 14px;
  }

  textarea {
    width: 100%;
    height: 56px;
    min-height: 16px;
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme.line.white};
    border-radius: 8px;
    resize: vertical;
    outline: 0;

    background: ${(props) => props.theme.input.background};
    font: 16px Archivo;
  }

  :focus-within::after {
    content: '';
    width: calc(100% - 32px);
    height: 2px;
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 7px;

    background:${(props) => props.theme.primary.lighter};
  }
`;
