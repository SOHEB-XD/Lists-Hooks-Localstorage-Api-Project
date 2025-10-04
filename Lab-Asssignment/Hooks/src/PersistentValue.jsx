// src/PersistentValue.js
import React, { useState, useRef, useEffect } from 'react';

function PersistentValue() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0); // Doesn't trigger re-render when changed
  const previousCount = useRef(0); // Store previous value
  
  // Track how many times component renders
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // Store previous count value
  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={containerStyle}>
      <h2>useRef Example - Avoiding Re-renders</h2>
      
      <div style={infoStyle}>
        <p><strong>Current Count:</strong> {count}</p>
        <p><strong>Previous Count:</strong> {previousCount.current}</p>
        <p><strong>Component Render Count:</strong> {renderCount.current}</p>
      </div>

      <button style={buttonStyle} onClick={increment}>
        Increment Count
      </button>

      <div style={explanationStyle}>
        <h3>How useRef helps:</h3>
        <ul>
          <li><code>renderCount</code> tracks renders without causing re-renders</li>
          <li><code>previousCount</code> persists values between renders</li>
          <li>Changing useRef values doesn't trigger component re-render</li>
        </ul>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#fff3cd',
  borderRadius: '8px',
  margin: '20px'
};

const infoStyle = {
  backgroundColor: 'white',
  padding: '15px',
  borderRadius: '6px',
  margin: '15px 0',
  border: '1px solid #ffeaa7'
};

const explanationStyle = {
  marginTop: '20px',
  padding: '15px',
  backgroundColor: '#f8f9fa',
  borderRadius: '6px',
  fontSize: '14px'
};

const buttonStyle = {
  padding: '10px 15px',
  fontSize: '16px',
  backgroundColor: '#17a2b8',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default PersistentValue;