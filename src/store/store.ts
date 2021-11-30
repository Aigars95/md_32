import { configureStore } from '@reduxjs/toolkit';
import { reducer as jokesReducer } from '../services/jokesServices';

const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
