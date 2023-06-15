import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStep2 } from './types';

const initialState: IStep2 = {
  advantages: [],
  checkboxGroup: [],
  radioGroup: 0,
};

export const step2Slice = createSlice({
  name: 'step2',
  initialState,

  reducers: {
    setStep2: (state, action: PayloadAction<IStep2>) => {
      state = action.payload;
    },
  },
});

export const { setStep2 } = step2Slice.actions;
export default step2Slice.reducer;
