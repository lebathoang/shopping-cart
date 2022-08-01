import { SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT } from './Constants';
import localStorageUltil from '@Utils/localStorage';

const initState = {
  todos: localStorageUltil.get('todos', []),
  job: localStorageUltil.get('job', []),
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
      const newTodos = [...state.todos, action.payload];
      localStorageUltil.set('todos', newTodos);
      const newJob = [...state.job, action.payload];
      localStorageUltil.set('job', newJob);
      localStorageUltil.remove('job');
      return {
        ...state,
        todos: newTodos,
        job: newJob,
      };
    case DELETE_TODO_INPUT:
      const newTodo = [...state.todos];
      const deleteTodo = newTodo.filter((todo) => todo !== action.payload);
      const newJobs = [...state.job];
      const deleteJobs = newJobs.filter((job) => job !== action.payload);
      return {
        ...state,
        todos: deleteTodo,
        job: deleteJobs,
      };
    default:
      throw new Error('Invalid action...');
  }
}

export { initState };
export default reducer;
