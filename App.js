import React, { Component } from 'react';
import { Tabs, LoginScreen, MyApp } from './routes';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return <LoginScreen />;
  }
}

export default App;
