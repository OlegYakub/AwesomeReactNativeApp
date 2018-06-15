
const initialState = {
  list: [
    {
      name: 'Create view component component component',
      completed: false
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

const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INIT':
      return state;

    case 'REMOVE_TODO':
      let newList = state.list.slice();
      newList.splice(action.index, 1);
      return {
        list: newList
      };

    default:
      return state
  }
};

export default todoReducer