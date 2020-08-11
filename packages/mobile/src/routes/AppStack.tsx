import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StudyTabs from './StudyTabs';

import Landing from '../pages/Landing';
import Teach from '../pages/Teach';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Landing" component={Landing} />
      <Screen name="Teach" component={Teach} />
      <Screen name="Study" component={StudyTabs} />
    </Navigator>
  </NavigationContainer>
);

export default AppStack;
