import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.primary.lighter};

  section {
    width: 100%;
    padding: 20px;

    background: ${(props) => props.theme.background};
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  padding: 20px;

  @media (min-width: 1100px) {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 20px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 350px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 90px;

  img {
    height: 100px;
  }

  h2 {
    max-width: 220px;
    margin: 0;

    color: ${(props) => props.theme.text.base_purple};
    font-weight: 500;
    font-size: 22px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  margin: 20px 0;

  display: flex;
  justify-content: center;

  a {
    width: 300px;
    height: 100px;
    border-radius: 18px;
    font: 700 20px Archivo;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: ${(props) => props.theme.button.text};

    transition: background-color .2s;
  }

  a:first-child {
    margin-right: 16px;
  }

  a img {
    width: 40px;
    margin-right: 8px;
  }

  a.study {
    background: ${(props) => props.theme.primary.light};
  }
  a.give-classes {
    background: ${(props) => props.theme.secondary.light};
  }

  a.study:hover {
    background: ${(props) => props.theme.primary.lighter};
  }
  a.give-classes:hover {
    background: ${(props) => props.theme.secondary.lighter};
  }
`;

export const TotalConnections = styled.div`
  margin: 0 10px;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.text.base};
  font-size: 14px;

  img {
    margin-right: 8px;
  }
`;
