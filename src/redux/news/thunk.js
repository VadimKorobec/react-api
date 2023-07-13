import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTopNews, getNews } from 'services/getNews';

export const getNewsThunk = createAsyncThunk('news/getTopNews', async () => {
  return await getTopNews();
});

export const getNewsSearchThunk = createAsyncThunk(
  'news/getSearch',
  async searchText => {
    return await getNews(searchText);
  }
);
