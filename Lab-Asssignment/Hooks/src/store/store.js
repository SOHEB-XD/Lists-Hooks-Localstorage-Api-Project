// src/store/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for counter
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export default store;