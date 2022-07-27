import { useRef } from 'react';
import { useStore, actions } from './Store/Jobs';

function Example() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(actions.addTodoInput(todoInput));
    inputRef.current.focus();
    dispatch(actions.setTodoInput(''));
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        ref={inputRef}
        placeholder="Enter todo..."
        value={todoInput}
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item} <span onClick={() => dispatch(actions.deleteTodoInput())}>&times;</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Example;
