import React, { useEffect } from 'react';
import './App.module.css';
import NavBar from '../components/NavBar/NavBar';
import { ThemeProvider, createTheme } from '@mui/material';
import { selectTheme } from '../theme/themeSlice';
import { useSelector } from 'react-redux';
import getRedditData from '../util/redditAPI';
import { Route, Routes } from 'react-router-dom';
import Topics from '../pages/Topics';
import Home from '../pages/Home';



function App() {
  const tema = createTheme(useSelector(selectTheme));

  return (
    <div className="App">
      <ThemeProvider theme={tema}>
        <NavBar />
        <Routes>
          <Route path="/:id" element={<Topics />} />
          <Route path="/" element={<Home />} />
        </Routes>
        

      </ThemeProvider>
    </div>
  );
}

export default App;
