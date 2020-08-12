import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  main {
    width: 100%;
    padding: 0 20px;
  }

  @media (min-width: 700px) {
    main {
      max-width: 740px;
      margin: 0 auto;
      padding: 0;
    } 
  }
`;

export const Box = styled.div`
  width: 100%;
  margin-top: -28px;
  padding-top: 20px;
  border-radius: 8px;

  background: ${(props) => props.theme.box.base};

  fieldset {
    border: 0;
  }

  fieldset + fieldset {
    margin-top: 34px;
  }

  fieldset legend {
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 1px solid ${(props) => props.theme.line.white};

    display: flex;
    align-items: center;
    justify-content: space-between;

    font: 700 24px Archivo;
    color: ${(props) => props.theme.text.title};
  }

  fieldset legend button {
    background: none;
    border: 0;
    color: ${(props) => props.theme.primary.light};
    font: 700 16px Archivo;
    cursor: pointer;
    transition: color .2;
    outline: none;
  }

  fieldset legend button:hover {
    color: ${(props) => props.theme.primary.darker};
  }

  fieldset .schedule-item + .schedule-item {
    margin-top: 60px;
  }

  footer {
    margin-top: 64px;
    padding: 20px 24px;
    border-top: 1px solid ${(props) => props.theme.line.white};

    background: ${(props) => props.theme.box.footer};
  }

  footer p {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    color: ${(props) => props.theme.text.complement};
  }

  footer p img {
    margin-right: 16px;
  }

  footer button {
    width: 100%;
    height: 56px;
    margin-top: 32px;
    border: 0;
    border-radius: 8px;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background: ${(props) => props.theme.secondary.light};
    color: ${(props) => props.theme.button.text};
    text-decoration: none;
    transition: background-color .2s;
  }

  footer button:hover {
    background: ${(props) => props.theme.secondary.lighter};
  }

  @media (min-width: 700px) {
    padding-top: 64px;

    legend {
      margin-bottom: 16px;
    }

    fieldset {
      padding: 0 64px;
    }

    fieldset .schedule-item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 16px;
    }

    fieldset .schedule-item + .schedule-item {
      margin-top: 14px;
    }

    fieldset .schedule-item div {
      margin-top: 0 !important;
    }

    footer {
      padding: 20px 64px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    footer p {
      justify-content: space-between;
    }

    footer button {
      width: 200px;
      margin-top: 0;
    }
  }
`;
