import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  createProductsThunk,
  deleteProductsThunk,
  getProductsThunk,
} from './thunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledGet = (state, action) => {
  state.products = action.payload;
  //   handleFulfilled(state);
};

const handleFulfilledCreate = (state, action) => {
  state.products.push(action.payload);
  //   handleFulfilled(state);
};

const handleFulfilledDelete = (state, action) => {
  state.products = state.products.filter(item => item.id !== action.payload.id);
  // handleFulfilled(state)
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      //   .addCase(getProductsThunk.pending, handlePending)
      .addCase(getProductsThunk.fulfilled, handleFulfilledGet)
      //   .addCase(getProductsThunk.rejected, handleRejected)
      //   .addCase(createProductsThunk.pending, handlePending)
      .addCase(createProductsThunk.fulfilled, handleFulfilledCreate)
      //   .addCase(createProductsThunk.rejected, handleRejected)
      //   .addCase(deleteProductsThunk.pending, handlePending)
      .addCase(deleteProductsThunk.fulfilled, handleFulfilledDelete)
      //   .addCase(deleteProductsThunk.rejected, handleRejected)
      .addMatcher(
        isAnyOf(
          getProductsThunk.pending,
          createProductsThunk.pending,
          createProductsThunk.rejected
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getProductsThunk.rejected,
          createProductsThunk.rejected,
          deleteProductsThunk.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          getProductsThunk.fulfilled,
          createProductsThunk.fulfilled,
          deleteProductsThunk.fulfilled
        ),
        handleFulfilled
      );
  },
});

export const productsReducer = productsSlice.reducer;
