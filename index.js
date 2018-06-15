import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './src/store/configureStore'
import App from './src/components/app/App';

const Root = () => {
  const store = configureStore();

  return (
    <App store={store} />
  );
};

AppRegistry.registerComponent('AwesomeProject', () => Root);
