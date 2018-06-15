
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import TodoListView from './TodoListView';
import { connect } from 'react-redux';

class TodoListContainer extends Component{
  render() {
    let list = this.props.list;
    return (
      <View>
        <TodoListView list={list}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.todoReducer.list
});

export default connect(mapStateToProps)(TodoListContainer);