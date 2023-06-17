import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import formSlice from './form/formSlice';
import { formApi } from './form/formAPI';

export const store = configureStore({
  reducer: {
    form: formSlice,
    [formApi.reducerPath]: formApi.reducer,
  },
  middleware: (gDM) => gDM().concat([formApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
