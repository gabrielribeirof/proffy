import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  @media (min-width: 1100px) {
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 
      "logo hero hero"
      "buttons total total";
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 20px;

  grid-area: logo;

  text-align: center;

  img {
    height: 80px;
  }

  h2 {
    font-weight: 500;
    font-size: 22px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;

  grid-area: hero;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  margin: 20px 0;

  display: flex;
  justify-content: center;
  grid-area: buttons;

  a {
    width: 300px;
    height: 100px;
    border-radius: 18px;
    font: 700 20px Archivo;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: var(--color-button-text);

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
    background: var(--color-primary-lighter);
  }
  a.give-classes {
    background: var(--color-secundary);
  }

  a.study:hover {
    background: var(--color-primary-light);
  }
  a.give-classes:hover {
    background: var(--color-secundary-dark);
  }
`;

export const TotalConnections = styled.div`
  margin: 0 10px;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: total;

  img {
    margin-right: 8px;
  }
`;
