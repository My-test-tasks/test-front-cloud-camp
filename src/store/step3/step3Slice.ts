import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStep3 } from './types';

const initialState: IStep3 = {
  about: '',
};

export const step3Slice = createSlice({
  name: 'step3',
  initialState,

  reducers: {
    setStep3: (state, action: PayloadAction<IStep3>) => {
      state = action.payload;
    },
  },
});

export const { setStep3 } = step3Slice.actions;
export default step3Slice.reducer;
