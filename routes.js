import React from 'react';
import {
  TabNavigator,
  TabBarBottom,
  StackNavigator,
  DrawerNavigator
} from 'react-navigation';

import FirstScreen from './components/screens/FirstScreen';
import SecondScreen from './components/screens/SecondScreen';
import Login from './components/screens/Login';
import Icon from 'react-native-vector-icons/Ionicons';
import Drawer from './components/screens/Drawer';

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
const MyApp = DrawerNavigator({
  Login: {
    screen: Login
  },
  Drawer: {
    screen: Drawer
  }
});
export const LoginScreen = StackNavigator({
  Login: {
    screen: MyApp,
    navigationOptions: {
      header: null
    }
  },
  FirstScreen: {
    screen: Tabs
  }
});
