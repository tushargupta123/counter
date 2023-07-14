import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/Auth/authSlice';

export const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    user:userReducer
  },
});
