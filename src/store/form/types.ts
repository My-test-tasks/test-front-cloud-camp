export enum StepNumber {
  zero = 'zero',
  one = 1,
  two = 2,
  three = 3,
}

export enum Sex {
  man = 'man',
  woman = 'woman',
}

export interface IStep1 {
  nickname: string;
  name: string;
  surname: string;
  sex: Sex | 0;
}

export interface IStep2 {
  advantages: string[];
  checkboxGroup: string[];
  radioGroup: string;
}

export interface IStep3 {
  about: string;
}

export interface FormState {
  step: StepNumber;
  step1: IStep1;
  step2: IStep2;
  step3: IStep3;
  sending: boolean;
}

export type FormData = IStep1 & IStep2 & IStep3;
