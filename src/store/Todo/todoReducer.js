import { AsyncStorage } from "react-native"

const getInitialState = () => {
  let initialState = {
    list: [
      {
        name: 'Create view component component component',
        completed: true
      },
      {
        name: 'Create add functionality',
        completed: false
      },
      {
        name: 'styling all',
        completed: false
      }
    ]
  };

  AsyncStorage.getItem('todoList').then((value) => {
    var todoList = JSON.parse(value);

    if (todoList) {
      initialState = todoList
    }
  });

  return initialState;

};

const todoReducer = (state = getInitialState(), action) => {

  switch (action.type) {
    case 'INIT':
      return state;

    case 'REMOVE_TODO':
      let newList = state.list.slice();
      newList.splice(action.index, 1);
      return {
        list: newList
      };

    case 'TOGGLE_COMPLETE':
      return {
        list: state.list.map((item, index) => {
          if (index === action.index) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          return item
        })
      };

    case 'CREATE_TODO':
      return {
        list: [
          ...state.list,
          {
            name: action.name,
            completed: false
          }
        ]
      };

    default:
      return state
  }
};

export default todoReducer;