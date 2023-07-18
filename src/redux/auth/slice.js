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
  reducers: {
    logOut(state) {
      state.profile = null;
      state.access_token = '';
    },
  },
  extraReducers: builder => {
    builder
      // .addCase(loginThunk.pending, handlePanding)
      // .addCase(loginThunk.rejected, handleRejected)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
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
export const { logOut } = authSlice.actions;
