import React, { useEffect } from "react";
import styles from "./App.module.css";
import NavBar from "../components/NavBar/NavBar";
import { ThemeProvider, createTheme } from "@mui/material";
import { selectTheme } from "../theme/themeSlice";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Topics from "../pages/Topics";
import Home from "../pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import NavDrawer from "../components/NavDrawer/NavDrawer";

function App() {
  const tema = createTheme(useSelector(selectTheme));

  return (
    <div className={styles.App}>
      <ThemeProvider theme={tema}>
        <CssBaseline />
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
