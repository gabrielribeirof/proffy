import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Container, Top, Content } from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => (
  <Container>
    <Top>
      <Link to="/">
        <img src={backIcon} alt="Back" />
      </Link>
      <img src={logoImage} alt="Proffy" />
    </Top>
    <Content>
      <b>{props.title}</b>
      {props.children}
    </Content>
  </Container>
);

export default PageHeader;
