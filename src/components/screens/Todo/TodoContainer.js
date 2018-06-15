import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import TodoView from './TodoView';



class TodoContainer extends Component{

  render() {
    return (
      <View>
        <TodoView/>
      </View>
    )
  }
}

export default TodoContainer;