import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import TodoListContainer from "../../widgets/Todo/TodoList/TodoListContainer";

const TodoView = () => {
  return (
    <View>
      <TodoListContainer />
    </View>
  )
};

export default TodoView