import { combineReducers } from 'redux'
import todoReducer from './Todo/todoReducer';

const reducer = combineReducers({
  todoReducer
});

export default reducer