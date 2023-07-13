import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTopNews } from 'services/getNews';

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

export const getNewsThunk = createAsyncThunk('news/getTopNews', async () => {
  return await getTopNews();
});

const initialState = {
  news: [],
  isLoading: false,
  error: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
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
  extraReducers: {},
});

export const newsReducer = newsSlice.reducer;
