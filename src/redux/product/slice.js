import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getProductsThunk } from './thunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.products = action.payload;
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getProductsThunk.pending, handlePending)
      .addCase(getProductsThunk.fulfilled, handleFulfilled)
      .addCase(getProductsThunk.rejected, handleRejected);
  },
});
