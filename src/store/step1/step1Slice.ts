import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStep1 } from './types';

const initialState: IStep1 = {
  nickname: '',
  name: '',
  surname: '',
  sex: null,
};

export const step1Slice = createSlice({
  name: 'step1',
  initialState,

  reducers: {
    setStep1: (state, action: PayloadAction<IStep1>) => {
      state = action.payload;
    },
  },
});

export const { setStep1 } = step1Slice.actions;
export default step1Slice.reducer;
