import { IStep1 } from '@store/step1/types';
import { IStep2 } from '@store/step2/types';
import { IStep3 } from '@store/step3/types';

export enum StepNumber {
  zero = 'zero',
  one = 'one',
  two = 'two',
  three = 'three',
}

export enum SendStatus {
  pending = 'pending',
  successful = 'successful',
  error = 'error',
}

export interface FormState {
  step: StepNumber;
  sendStatus: SendStatus | null;
}

export type FormData = IStep1 & IStep2 & IStep3;
