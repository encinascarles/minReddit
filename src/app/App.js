import React from 'react';
import { Counter } from '../features/counter/Counter';
import './App.module.css';
import NavBar from '../components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
}

export default App;
