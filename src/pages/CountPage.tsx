import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, RootState } from '../stores';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;