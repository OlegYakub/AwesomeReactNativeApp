
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import { connect } from 'react-redux';
import TodoItemView from './TodoItemView'
import { removeTodo } from "../../../../store/Todo/todoActions";

class TodoItemContainer extends Component{

  handleRemove = () => {
    this.props.dispatch(removeTodo(+this.props.index))
  };

  render() {
    //console.log('item', this.props);

    let name = this.props.name;
    return (
      <View>
        <TodoItemView name={name} removeTodo={this.handleRemove}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.todoReducer.list
});

export default connect(mapStateToProps)(TodoItemContainer);