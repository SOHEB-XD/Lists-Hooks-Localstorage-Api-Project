// src/App.js
import React from 'react';
import './App.css';
import Counter from './Counter';
import UserData from './UserData';
import ReduxCounter from './ReduxCounter';
import PersistentValue from './PersistentValue';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
        <h1>React Hooks & Redux Examples</h1>
      </header>
      
      <main style={{ padding: '20px' }}>
        <Counter />
        <hr />
        <UserData />
        <hr />
        <ReduxCounter />
        <hr />
        <PersistentValue />
      </main>
    </div>
  );
}

export default App;