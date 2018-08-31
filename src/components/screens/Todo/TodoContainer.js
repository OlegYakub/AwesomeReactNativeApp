import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import TodoView from './TodoView';



class TodoContainer extends Component{

  static navigationOptions = {
    headerTitle: 'Todo',
    headerStyle: {
      backgroundColor: '#fff'
    },
    headerTintColor: '#2f8b8c'
  };

  render() {
    return (
      <View>
        <TodoView/>
      </View>
    )
  }
}

export default TodoContainer;