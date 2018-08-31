export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const CREATE_TODO = 'CREATE_TODO';

export function removeTodo(index) {
  return { type: REMOVE_TODO, index }
}

export function toggleComplete(index) {
  return { type: TOGGLE_COMPLETE, index }
}

export function createTodo(name) {
  return {type: CREATE_TODO, name}
}