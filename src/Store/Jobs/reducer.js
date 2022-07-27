import { SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT } from './Constants';

const initState = {
  todos: [],
  todoInput: '',
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO_INPUT:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO_INPUT:
      const newJobs = [...state.todos];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        todos: newJobs,
      };
    default:
      throw new Error('Invalid action...');
  }
}

export { initState };
export default reducer;
