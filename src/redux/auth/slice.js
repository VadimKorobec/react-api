import { loginThunk } from './thunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  access_token: '',
  isloading: false,
  error: '',
};

const handlePanding = state => {
  state.isloading = true;
};

const handleFulfilled = (state, action) => {
  state.isloading = false;
  state.access_token = action.payload.access_token;
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isloading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, handlePanding)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
