import { createSlice } from '@reduxjs/toolkit';
import { getProfileThunk, loginThunk } from './thunk';

const initialState = {
  access_token: '',
  isloading: false,
  error: '',
  profile: null,
};

const handlePanding = state => {
  state.isloading = true;
};

const handleFulfilled = (state, action) => {
  state.isloading = false;
  state.access_token = action.payload.access_token;
  state.error = '';
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isloading = false;
  state.error = '';
  state.profile = payload;
};

const handleRejected = (state, action) => {
  state.isloading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      state.profile = null;
      state.access_token = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, handlePanding)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(getProfileThunk.pending, handlePanding)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addCase(getProfileThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
