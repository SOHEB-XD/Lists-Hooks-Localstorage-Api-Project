
import React from 'react';

function FruitList() {
  // Array of fruit names
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

  return (
    <div style={containerStyle}>
      <h2>My Fruit List</h2>
      <ul style={listStyle}>
        {/* Using map() to transform array of strings into array of JSX elements */}
        {fruits.map((fruit, index) => (
          <li key={index} style={listItemStyle}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Inline styles
const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
};

const listStyle = {
  listStyleType: 'none',
  padding: 0
};

const listItemStyle = {
  padding: '8px 12px',
  margin: '5px 0',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ddd',
  borderRadius: '4px'
};

export default FruitList;