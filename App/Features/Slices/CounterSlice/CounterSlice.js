import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    onPressCounter: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {onPressCounter} = CounterSlice.actions;
export default CounterSlice.reducer;
