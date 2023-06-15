import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from '../index';
import { FormData, FormState, SendStatus, StepNumber } from './types';
import { setStep3 } from '@store/step3/step3Slice';
import { sendData } from './formAPI';

const initialState: FormState = {
  step: StepNumber.zero,
  sendStatus: null,
};

export const sendForm = createAsyncThunk('form/sendForm', async (data: FormData) => {
  const response = await sendData(data);
  return response.data;
});

export const formSlice = createSlice({
  name: 'form',
  initialState,

  reducers: {
    setStep: (state, action: PayloadAction<StepNumber>) => {
      state.step = action.payload;
    },
    submitForm: (_, action: PayloadAction<FormData>) => {
      sendForm(action.payload);
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(setStep3, () => {
    //   const allState = store.getState();
    //   const formData: FormData = {
    //     ...allState.step1,
    //     ...allState.step2,
    //     ...allState.step3,
    //   };
    //   sendForm(formData);
    // }),
    builder.addCase(sendForm.pending, (state) => {
      state.sendStatus = SendStatus.pending;
    }),
      builder.addCase(sendForm.fulfilled, (state, action) => {
        if (action.payload.status !== '200') {
          state.sendStatus = SendStatus.error; // TODO: потестить ошибку
        }

        state.sendStatus = SendStatus.successful;
      }),
      builder.addCase(sendForm.rejected, (state) => {
        state.sendStatus = SendStatus.error;
      });
  },
});

export const { setStep } = formSlice.actions;

export default formSlice.reducer;
