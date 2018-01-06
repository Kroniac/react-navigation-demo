import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

import FirstScreen from './components/screens/FirstScreen';
import SecondScreen from './components/screens/SecondScreen';
import Login from './components/screens/Login';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = TabNavigator(
  {
    FirstScreen: {
      screen: FirstScreen,
      navigationOptions: {
        tabBarlabel: 'Home',
        tabBarIcon: () => <Icon name="md-map" size={25} />
      }
    },
    SecondScreen: {
      screen: SecondScreen
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export const LoginScreen = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  FirstScreen: {
    screen: Tabs
  }
});

