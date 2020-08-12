import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  main {
    padding: 0 20px;
  }

  @media (min-width: 700px) {
    main {
      padding: 32px 0;
      max-width: 740px;
      margin: 0 auto;
    } 
  }
`;

export const SearchTeachers = styled.form`
  width: 100%;
  margin-top: 20px;

  label {
    color: ${(props) => props.theme.text.base_purple};
  }

  button {
    width: 100%;
    height: 56px;
    margin-top: 25px;
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

  button:hover {
    background: ${(props) => props.theme.secondary.lighter};
  }

  @media (min-width: 700px) {
    margin-top: 0;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;

    position: absolute;
    bottom: -26px;

    div + div {
      margin-top: 0;
    }
  }
`;

export const NoTeachers = styled.span`
  width: 100%;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
