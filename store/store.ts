import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cityReducer from '../features/city/citySlice'

export const store = configureStore({
  reducer: {
    city: cityReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;