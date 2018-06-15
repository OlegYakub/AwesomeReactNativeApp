/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Profile from './src/components/screens/Profile';
import Home from './src/components/screens/Home';
import Gallery from "./src/components/screens/Gallery";
import TodoContainer from "./src/components/screens/Todo/TodoContainer";

const App = StackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  Gallery: { screen: Gallery },
  Todo: { screen: TodoContainer },
});

export default App