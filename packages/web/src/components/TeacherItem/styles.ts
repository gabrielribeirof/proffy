import styled from 'styled-components';

export const Container = styled.article`
  margin-top: 24px;
  border: 1px solid var(--color-line-in-white);
  border-radius: 8px;

  background: var(--color-box-base);
  overflow: hidden;

  header {
    padding: 15px 20px;
    display: flex;
    align-items: center;
  }

  header img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  header div {
    margin-left: 24px;
  }

  header div b {
    font: 700 24px Archivo;
    display: block;
    color: var(--color-text-title);
  }

  header div span {
    font-size: 16px;
    display: block;
    margin-top: 4px;
  }

  > p {
    padding: 0 20px;
  }

  footer {
    padding: 20px;
    margin-top: 32px;
    border-top: 1px solid var(--color-line-in-white);

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    background: var(--color-box-footer);
  }

  footer p b {
    color: var(--color-primary);
    font-size: 16px;
    display: block;
  }

  @media (min-width: 700px) {
    footer p {
      display: flex;
    }

    footer p b {
      margin-left: 10px;
    }
  }
`;

export const WhatsappButton = styled.a`
  width: 200px;
  height: 56px;
  margin: 0 10px;
  border: 0;
  border-radius: 8px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  background: var(--color-secundary);
  color: var(--color-button-text);
  text-decoration: none;
  cursor: pointer;
  transition: .2s;

  :hover {
    background: var(--color-secundary-dark);
  }
`;
