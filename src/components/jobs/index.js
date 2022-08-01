import { useRef } from 'react';
import { useStore, actions } from '../../Store/Jobs';
import './index.css';

function Example() {
  const [state, dispatch] = useStore();
  const { todos, job } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(actions.addTodoInput(inputRef.current.value));
    inputRef.current.focus();
    inputRef.current.value = '';
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input ref={inputRef} placeholder="Enter todo..." />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item}
              {''}
              <span className="clear" onClick={() => dispatch(actions.deleteTodoInput(item))}>
                &times;
              </span>
            </li>
          );
        })}
        <p>---------</p>
        {job.map((item, index) => {
          return (
            <li key={index}>
              {item}
              {''}
              <span className="clear" onClick={() => dispatch(actions.deleteTodoInput(item))}>
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Example;
