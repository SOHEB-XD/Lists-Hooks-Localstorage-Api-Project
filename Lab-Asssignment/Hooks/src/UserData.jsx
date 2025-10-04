
import React, { useState, useEffect } from 'react';

function UserData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect runs after the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const userData = await response.json();
        setUsers(userData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs only once when component mounts

  if (loading) {
    return <div style={messageStyle}>Loading users...</div>;
  }

  if (error) {
    return <div style={{ ...messageStyle, color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={containerStyle}>
      <h2>User List (Fetched from API)</h2>
      <div style={listStyle}>
        {users.map(user => (
          <div key={user.id} style={userCardStyle}>
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
};

const messageStyle = {
  padding: '20px',
  textAlign: 'center',
  fontSize: '18px'
};

const listStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '15px',
  marginTop: '20px'
};

const userCardStyle = {
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

export default UserData;