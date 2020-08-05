import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Container, Top, Content } from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => (
  <Container>
    <Top>
      <Link to="/">
        <img src={backIcon} alt="Back" />
      </Link>
      <img src={logoImage} alt="Proffy" />
    </Top>
    <Content>
      <b>{title}</b>
      {description && <p>{description}</p>}

      {children}
    </Content>
  </Container>
);

export default PageHeader;
