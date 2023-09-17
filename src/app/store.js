import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../theme/themeSlice';
import topicsReducer from '../components/TopicsContainer/topicsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    topics: topicsReducer,
  },
});
