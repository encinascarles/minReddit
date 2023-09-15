import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  
  reducers: {
    toggleMode: (state) => {
        if(state.mode === 'dark'){
            state.mode = 'light';
        }
        else{
            state.mode = 'dark';
        }
    }
  },
});

export const { toggleMode } = themeSlice.actions;

export const selectTheme = (state) => state.theme;

export default themeSlice.reducer;
