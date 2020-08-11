import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => (
  <Navigator
    tabBarOptions={{
      style: {
        height: Platform.OS === 'ios' ? 84 : 64,
        elevation: 0,
        shadowOpacity: 0,
      },
      tabStyle: {
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      safeAreaInsets: {
        bottom: 0,
      },
      iconStyle: {
        width: 20,
        height: Platform.OS === 'ios' ? 24 : 20,
        flex: 0,
      },
      labelStyle: {
        marginLeft: 16,
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
      },
      inactiveBackgroundColor: '#fafafc',
      activeBackgroundColor: '#ebebf5',
      inactiveTintColor: '#c1bccc',
      activeTintColor: '#32264d',
    }}
  >
    <Screen
      name="TeacherList"
      component={TeacherList}
      options={{
        tabBarLabel: 'Proffys',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
        ),
      }}
    />
    <Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
        ),
      }}
    />
  </Navigator>
);

export default StudyTabs;
