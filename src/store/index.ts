import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import formSlice from './form/formSlice';
import step1Slice from './step1/step1Slice';
import step2Slice from './step2/step2Slice';
import step3Slice from './step3/step3Slice';

export const store = configureStore({
  reducer: {
    form: formSlice,
    step1: step1Slice,
    step2: step2Slice,
    step3: step3Slice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
