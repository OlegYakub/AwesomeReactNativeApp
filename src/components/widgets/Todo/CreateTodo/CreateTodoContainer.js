import React, { Component } from 'react';
import {
  View,
  Keyboard,
} from 'react-native';
import { connect } from "react-redux";
import CreateTodoView from './CreateTodoView'
import { createTodo } from '../../../../store/Todo/todoActions';

class CreateTodoContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoName: ''
    }
  }

  handleCreateTodo = () => {
    if (!this.state.todoName) {
      alert('Please type Todo');
      return;
    }

    Keyboard.dismiss();
    this.props.dispatch(createTodo(this.state.todoName));
    this.setState({ todoName: '' });
  };

  handleChangeValue = (value) => {
    this.setState({ todoName: value });
  };

  render() {
    return (
      <View>
        <CreateTodoView
          createTodo={this.handleCreateTodo}
          todoName={this.state.todoName}
          onChangeValue={this.handleChangeValue}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.todoReducer.list
});


export default connect(mapStateToProps)(CreateTodoContainer);