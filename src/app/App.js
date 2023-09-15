import React from 'react';
import './App.module.css';
import NavBar from '../components/NavBar/NavBar';
import { ThemeProvider, createTheme } from '@mui/material';
import { selectTheme } from '../theme/themeSlice';
import { useSelector } from 'react-redux';



function App() {
  const tema = createTheme(useSelector(selectTheme));

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
