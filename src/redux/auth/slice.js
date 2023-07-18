import { getProfileThunk, loginThunk } from './thunk';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

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

const handleFulfilledProfile = (state, action) => {
  state.isloading = false;
  state.error = '';
  state.profile = action.payload;
};

const handleRejected = (state, action) => {
  state.isloading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(loginThunk.pending, handlePanding)

      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      // .addCase(loginThunk.rejected, handleRejected)
      .addMatcher(
        isAnyOf(loginThunk.rejected, getProfileThunk.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(loginThunk.pending, getProfileThunk.pending),
        handlePanding
      );
  },
});

export const authReducer = authSlice.reducer;
