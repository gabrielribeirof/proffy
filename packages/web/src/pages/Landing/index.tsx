import React, { useState, useEffect } from 'react';
import api from '@proffy/axios-config';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logo.svg';
import landingImage from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  Container, LogoContainer, HeroContainer, HeroImage, ButtonsContainer, TotalConnections,
} from './styles';

const Landing: React.FC = () => {
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((response) => {
      const { total } = response.data;

      setConnections(total);
    });
  }, []);

  return (
    <Container>
      <HeroContainer>
        <LogoContainer>
          <img src={logoImage} alt="Proffy" />
          <h2>Study online with the best teachers</h2>
        </LogoContainer>

        <HeroImage
          src={landingImage}
          alt="Study platform"
        />
      </HeroContainer>

      <section>
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
          {connections}
          {' '}
          connections have already been made
        </TotalConnections>
      </section>
    </Container>
  );
};

export default Landing;
