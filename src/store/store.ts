import { configureStore } from '@reduxjs/toolkit';
import advertsReducer from './createSlice.ts';

export default configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
