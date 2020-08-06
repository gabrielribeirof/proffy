import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  section {
    width: 100%;
    padding: 20px;

    background: var(--color-background);
  }

  @media (min-width: 1100px) {
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

  color: var(--color-text-base);
  font-size: 14px;

  img {
    margin-right: 8px;
  }
`;
