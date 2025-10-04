// src/App.js
import React from 'react';
import FruitList from './FruitList';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h1>React List Rendering Examples</h1>
      </header>
      
      <main style={{ padding: '20px' }}>
        {/* Render the Fruit List Component */}
        <FruitList />
        
        <hr style={{ margin: '40px 0' }} />
        
        {/* Render the User List Component */}
        <UserList />
      </main>
    </div>
  );
}

export default App;