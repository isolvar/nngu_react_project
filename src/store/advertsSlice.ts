import { createSlice } from '@reduxjs/toolkit';

interface IStateElement {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
}

export interface IAdvertsState {
  products: IStateElement[];
}

export interface IReturnedAdvertsState {
  adverts: IAdvertsState;
}

//============================

const initialState: IAdvertsState | null = null;

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: initialState,
  reducers: {
    setState: (state, action) => {
      return action.payload;
    },
    clearState: () => {
      return null;
    },
  },
});

export const advertsActions = advertsSlice.actions;

export default advertsSlice.reducer;
