import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  background: var(--color-primary);

  @media (min-width: 700px) {
    height: 250px;
  }
`;

export const Top = styled.div`
  width: 90%;
  margin: 0 auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color-text-in-primary);
  padding: 16px 0;

  a {
    height: 32px;
    transition: opacity .2s;
  }
  a:hover {
    opacity: .6;
  }

  img {
    height: 26px;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 32px auto;

  b {
    max-width: 350px;
    font: 700 36px Archivo;
    color: var(--color-title-in-primary);
  }

  @media (min-width: 700px) {
    position: relative;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
