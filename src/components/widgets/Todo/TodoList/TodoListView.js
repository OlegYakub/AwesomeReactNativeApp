
import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import TodoItemContainer from '../TodoItem/TodoItemContainer'

const TodoListView = ({
  list
                      }) => {

  return (
    <View>
      <FlatList
        data={list}
        renderItem={({item}) => <TodoItemContainer name={item.name} index={list.indexOf(item)}/>}
      />
    </View>
  )
};

export default TodoListView