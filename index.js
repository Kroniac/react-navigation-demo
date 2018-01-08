import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider, connect } from 'react-redux';
import App from './App';
import configureReducer from './store/reducer/configureReducer';

const store = configureReducer();
const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('navigation_reactNative', () => Redux);
