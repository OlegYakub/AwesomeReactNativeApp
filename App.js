/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Profile from './srs/components/screens/Profile';
import Home from './srs/components/screens/Home';
import Gallery from "./srs/components/screens/Gallery";
import TodoContainer from "./srs/components/screens/Todo/TodoContainer";

const App = StackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  Gallery: { screen: Gallery },
  Todo: { screen: TodoContainer },
});

export default App