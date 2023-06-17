export enum StepNumber {
  zero = 'zero',
  one = 'one',
  two = 'two',
  three = 'three',
  send = 'send',
}

export enum Sex {
  man = 'man',
  woman = 'woman',
}

export interface IStep1 {
  nickname: string;
  name: string;
  surname: string;
  sex: Sex | null;
}

export interface IStep2 {
  advantages: string[];
  checkboxGroup: string[];
  radioGroup: number;
}

export interface IStep3 {
  about: string;
}

export interface FormState {
  step: StepNumber;
  step1: IStep1;
  step2: IStep2;
  step3: IStep3;
}

export type FormData = IStep1 & IStep2 & IStep3;
