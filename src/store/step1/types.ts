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
