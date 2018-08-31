import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import TodoItemContainer from '../TodoItem/TodoItemContainer'
import CreateTodoContainer from '../CreateTodo/CreateTodoContainer'
import EmptyTodoList from './EmptyTodoList'

const TodoListView = ({
                        list
                      }) => {
  return (
    <View>
      <CreateTodoContainer/>
      <FlatList
        data={list}
        ListEmptyComponent={EmptyTodoList}
        renderItem={({item}) => <TodoItemContainer name={item.name} completed={item.completed}
                                                   index={list.indexOf(item)}/>}
      />
    </View>
  )
};

export default TodoListView