import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {commonSlice} from './calendar';


export const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;

export const useAppDispatch = () => (
  useDispatch<typeof store.dispatch>()
);

export const actions = {
  common: {
    increment: commonSlice.actions.increment,
    decrement: commonSlice.actions.decrement,
    add: commonSlice.actions.add,
  },
};
