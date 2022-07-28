import { useReducer, useRef } from 'react';

import { setCount, addCount, addInputCount, deleteCount, deleteInputCount } from './handlesData/actions';
import reducer, { initState } from './handlesData/reducer';
import './Count.css';

function Count() {
  const [counts, dispatch] = useReducer(reducer, initState);
  const { count, str_count } = counts;
  const inputRef = useRef();

  const handleDeleteCount = () => {
    dispatch(deleteCount());
    dispatch(deleteInputCount(str_count));
    inputRef.current.focus();
    dispatch(setCount(''));
  };

  const handleAddCount = () => {
    dispatch(addCount());
    dispatch(addInputCount(str_count));
    inputRef.current.focus();
    dispatch(setCount(''));
  };

  return (
    <div className="App">
      <div className="head">
        <button onClick={handleDeleteCount}>-</button>
        <input
          ref={inputRef}
          placeholder="Enter count ..."
          value={str_count}
          onChange={(e) => dispatch(setCount(e.target.value))}
        />
        <button onClick={handleAddCount}>+</button>
      </div>
      <h1>{count}</h1>
      <div className="footer">
        <button onClick={() => dispatch(deleteCount())}>-</button>
        <button onClick={() => dispatch(addCount())}>+</button>
      </div>
    </div>
  );
}

export default Count;
