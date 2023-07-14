import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  status: 'idle',
};

export const tokenSlice = createAsyncThunk(
  'user/tokenSlice',
  async (data) => {
    return data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(tokenSlice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(tokenSlice.fulfilled, (state, action) => {
        state.status = 'idle';
        state.token = action.payload;
      });
    }
});

export const fetchToken = (state) => state.user.token;

export default userSlice.reducer;
