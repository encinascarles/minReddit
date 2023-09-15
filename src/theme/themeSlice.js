import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    palette: {
      mode: "dark",
      primary: {
        main: '#ff3d00',
      },
      secondary: {
        main: '#78909c',
      },
    }
  }

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: (state) => {
        if(state.palette.mode === 'dark'){
            state.palette.mode = 'light';
        }
        else{
            state.palette.mode = 'dark';
        }
    }
  },
});

export const { toggleMode } = themeSlice.actions;

export const selectTheme = (state) => state.theme;

export default themeSlice.reducer;
