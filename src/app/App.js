import React from 'react';
import { Counter } from '../features/counter/Counter';
import './App.module.css';
import NavBar from '../components/NavBar/NavBar';
import {tema} from './theme';
import { ThemeProvider } from '@mui/material';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={tema}>
          <NavBar />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
