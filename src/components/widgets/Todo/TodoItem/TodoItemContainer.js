
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import { connect } from 'react-redux';
import TodoItemView from './TodoItemView'
import { removeTodo, toggleComplete } from '../../../../store/Todo/todoActions';

class TodoItemContainer extends Component{

  handleRemove = () => {
    this.props.dispatch(removeTodo(+this.props.index))
  };

  handleToggleComplete = () => {
    this.props.dispatch(toggleComplete(+this.props.index))
  };

  render() {
    let name = this.props.name;
    let completed = this.props.completed;
    return (
      <View>
        <TodoItemView
          name={name}
          completed={completed}
          removeTodo={this.handleRemove}
          toggleComplete={this.handleToggleComplete}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.todoReducer.list
});

export default connect(mapStateToProps)(TodoItemContainer);