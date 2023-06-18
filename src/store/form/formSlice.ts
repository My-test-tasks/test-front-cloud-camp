import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState, StepNumber, IStep1, IStep2, IStep3 } from './types';

const step1: IStep1 = {
  nickname: '',
  name: '',
  surname: '',
  sex: 0,
};

const step2: IStep2 = {
  advantages: ['', '', ''],
  checkboxGroup: [],
  radioGroup: '',
};

const step3: IStep3 = {
  about: '',
};
const initialState: FormState = {
  step: StepNumber.zero,
  step1,
  step2,
  step3,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,

  reducers: {
    setStep: (state, action: PayloadAction<StepNumber>) => {
      state.step = action.payload;
    },
    setStep1: (state, action: PayloadAction<IStep1>) => {
      state.step1 = action.payload;
      return state;
    },
    setStep2: (state, action: PayloadAction<IStep2>) => {
      state.step2 = action.payload;
      return state;
    },
    setStep3: (state, action: PayloadAction<IStep3>) => {
      state.step3 = action.payload;
      return state;
    },
  },
});

export const { setStep, setStep1, setStep2, setStep3 } = formSlice.actions;

export default formSlice.reducer;
