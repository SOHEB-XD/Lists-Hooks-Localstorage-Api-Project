// src/ReduxCounter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store/store';

function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={containerStyle}>
      <h2>Redux Counter: {count}</h2>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button style={resetButtonStyle} onClick={() => dispatch(reset())}>
          Reset
        </button>
        <button style={buttonStyle} onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
    </div>
  );
}

// Reuse the same styles from Task 1
const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f0f8ff',
  borderRadius: '8px',
  margin: '20px'
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '15px'
};

const buttonStyle = {
  padding: '10px 15px',
  fontSize: '16px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const resetButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#dc3545'
};

export default ReduxCounter;