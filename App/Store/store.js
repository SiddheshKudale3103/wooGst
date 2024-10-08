import {configureStore} from '@reduxjs/toolkit';
import CounterReducers from '../Features/Slices/CounterSlice/CounterSlice';

const store = configureStore({
  reducer: {Counter: CounterReducers},
});

export default store;
