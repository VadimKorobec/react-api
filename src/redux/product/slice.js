import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder.addCase();
  },
});
