import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';

interface CommonState {
  value: number,
};

const initialState = {
  value: 0,
};

const reducers: SliceCaseReducers<CommonState> = {
  increment: (state) => {
    state.value += 1;
  },
  decrement: (state) => {
    state.value -= 1;
  },
  add: (state, action: PayloadAction<number>) => {
    state.value += action.payload;
  },
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers,
});
