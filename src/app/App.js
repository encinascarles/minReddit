import React from 'react';
import './App.module.css';
import NavBar from '../components/NavBar/NavBar';
import { ThemeProvider, createTheme } from '@mui/material';
import { selectTheme } from '../theme/themeSlice';
import { useSelector } from 'react-redux';



function App() {
  const mode = useSelector(selectTheme).mode;
  const tema = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#ff3d00',
      },
      secondary: {
        main: '#78909c',
      },
    }
  });


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
