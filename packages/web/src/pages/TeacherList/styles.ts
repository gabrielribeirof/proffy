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
  margin-top: 20px;

  label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    margin-top: 0;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;

    position: absolute;
    bottom: -26px;

    div + div {
      margin-top: 0;
    }
  }
`;

export const TeacherItem = styled.article`
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
    padding: 0 20px;
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
`;

export const WhatsappButton = styled.button`
  width: 200px;
  height: 56px;
  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  background: var(--color-secundary);
  color: var(--color-button-text);
  cursor: pointer;
  font: 700 14px Archivo;
  transition: .2s;

  :hover {
    background: var(--color-secundary-dark);
  }
`;
