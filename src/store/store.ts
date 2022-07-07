import { configureStore } from '@reduxjs/toolkit';
import advertsReducer from './advertsSlice.ts';

export default configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
