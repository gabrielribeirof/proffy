import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '@proffy/axios-config';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((response) => {
      const { total } = response.data;

      setConnections(total);
    });
  }, []);

  function handleNavigationToTeach() {
    navigate('Teach');
  }

  function handleNavigateToStudyPage() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Image source={landingImg} style={styles.heroImage} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>
          Welcome,
          {'\n'}
          <Text style={styles.titleBold}>What you want to do today?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleNavigateToStudyPage}
            style={[styles.button, styles.buttonPrimary]}
          >
            <Image source={studyIcon} />

            <Text style={styles.buttonText}>Study</Text>
          </RectButton>

          <RectButton
            onPress={handleNavigationToTeach}
            style={[styles.button, styles.buttonSecondary]}
          >
            <Image source={giveClassesIcon} />

            <Text style={styles.buttonText}>Teach</Text>
          </RectButton>
        </View>

        <Text style={styles.totalConnections}>
          {connections}
          {' '}
          connections have already been made
          {' '}
          <Image source={heartIcon} />
        </Text>
      </View>
    </View>
  );
};

export default Landing;
