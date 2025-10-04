
import React from 'react';

function UserList() {
  // Array of user objects with unique IDs
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', age: 28 },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', age: 32 },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', age: 24 },
    { id: 4, name: 'David Wilson', email: 'david@example.com', age: 35 }
  ];

  return (
    <div style={containerStyle}>
      <h2>User Directory</h2>
      <div style={listStyle}>
        {/* Using map() to transform array of objects into array of JSX elements */}
        {users.map(user => (
          <div key={user.id} style={userCardStyle}>
            <h3 style={userNameStyle}>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>ID:</strong> {user.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline styles
const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
};

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};

const userCardStyle = {
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const userNameStyle = {
  margin: '0 0 10px 0',
  color: '#2c3e50'
};

export default UserList;