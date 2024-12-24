import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasksSlice';
import counterReducer from './features/counterSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    counter: counterReducer,
  },
});

export default store;