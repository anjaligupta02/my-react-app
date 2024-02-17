// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
