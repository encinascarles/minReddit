import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { data: {} };

export const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    setTopics: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setTopics } = topicsSlice.actions;

export const selectTopics = (state) => state.topics.data;

export default topicsSlice.reducer;
