import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getNewsSearchThunk, getNewsThunk } from './thunk';
import { initialState } from './initialState';

const customArr = [getNewsThunk, getNewsSearchThunk];

const fn = status => {
  return customArr.map(item => item[status]);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.news = action.payload;
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(getNewsThunk.pending, handlePending)
      .addCase(getNewsThunk.fulfilled, handleFulfilled)
      .addCase(getNewsThunk.rejected, handleRejected)
      // .addCase(getNewsSearchThunk.pending, handlePending)
      .addCase(getNewsSearchThunk.fulfilled, handleFulfilled)
      .addCase(getNewsSearchThunk.rejected, handleRejected)
      .addMatcher(
        isAnyOf([getNewsThunk.pending, getNewsSearchThunk.pending]),
        handlePending
      );
  },
});

export const newsReducer = newsSlice.reducer;

// export const getNewsThunk = () => {
//   return async dispatch => {
//     try {
//       dispatch(newsSlice.actions.fetching());
//       const data = await getTopNews();
//       dispatch(newsSlice.actions.fetchSuccess(data));
//     } catch (error) {
//       dispatch(newsSlice.actions.fetchError(error));
//     }
//   };
// };

// const newsSlice = createSlice({
//   name: 'news',
//   initialState,
// reducers: {
//   fetching: state => {
//     state.isLoading = true;
//   },
//   fetchSuccess: (state, action) => {
//     state.isLoading = false;
//     state.news = action.payload;
//     state.error = '';
//   },
//   fetchError: (state, { payload }) => {
//     state.isLoading = false;
//     state.error = payload;
//   },
// },
// extraReducers: {
//   [getNewsThunk.pending](state) {
//     state.isLoading = true;
//   },
//   [getNewsThunk.fulfilled](state, action) {
//     state.isLoading = false;
//     state.news = action.payload;
//     state.error = '';
//   },
//   [getNewsThunk.rejected](state, action) {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
// },
// extraReducers: builder => {
//   builder
//     .addCase(getNewsThunk.pending, state => {
//       state.isLoading = true;
//     })
//     .addCase(getNewsThunk.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.news = action.payload;
//       state.error = '';
//     })
//     .addCase(getNewsThunk.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     });
// },
// });
