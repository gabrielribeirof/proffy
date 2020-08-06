import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--color-primary);

  @media (min-width: 700px) {
    height: 300px;
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 65px;
  padding: 0 10%;
  border-bottom: 1px solid var(--color-primary-darker);
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--color-primary-dark);
  color: var(--color-text-in-primary);

  a {
    display: flex;
    align-items: center;
    transition: opacity .2s;
  }
  a:hover {
    opacity: .6;
  }

  img {
    height: 26px;
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

  p {
    max-width: 300px;
    margin-top: 12px;
    font-size: 16px;
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    position: relative;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 28px;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
