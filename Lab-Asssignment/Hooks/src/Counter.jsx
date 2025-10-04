
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={containerStyle}>
      <h2>Counter: {count}</h2>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={decrement}>
          Decrement
        </button>
        <button style={resetButtonStyle} onClick={reset}>
          Reset
        </button>
        <button style={buttonStyle} onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
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
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const resetButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#6c757d'
};

export default Counter;