import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.primary.lighter};

  @media (min-width: 700px) {
    height: 300px;
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 65px;
  padding: 0 10%;
  border-bottom: ${(props) => props.theme.primary.darker};
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.primary.dark};
  color: ${(props) => props.theme.text.base_purple};

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
    color: ${(props) => props.theme.text.title_purple};
  }

  p {
    max-width: 300px;
    margin-top: 12px;
    font-size: 16px;
    color: ${(props) => props.theme.text.base_purple};
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
