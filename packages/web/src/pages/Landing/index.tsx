import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logo.svg';
import landingImage from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  Container, LogoContainer, HeroImage, ButtonsContainer, TotalConnections,
} from './styles';

const Landing: React.FC = () => (
  <Container>
    <LogoContainer>
      <img src={logoImage} alt="Proffy" />
      <h2>Study online with the best teachers</h2>
    </LogoContainer>

    <HeroImage
      src={landingImage}
      alt="Study platform"
    />

    <ButtonsContainer>
      <Link to="/study" className="study">
        <img src={studyIcon} alt="Study" />
        Study
      </Link>

      <Link to="/give-classes" className="give-classes">
        <img src={giveClassesIcon} alt="Classes" />
        Teach
      </Link>
    </ButtonsContainer>

    <TotalConnections>
      <img src={purpleHeartIcon} alt="Heart" />
      More than 200 connections have already been made
    </TotalConnections>
  </Container>
);

export default Landing;
