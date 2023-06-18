import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FormData, Sex } from './types';
import { URL } from '@configs/api';

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}`,
  }),
  endpoints: (build) => ({
    sendForm: build.mutation<unknown, FormData>({
      query: (formData) => {
        const data = {
          ...formData,
          sex: formData.sex === 0 ? Sex.man : formData.sex,
          radioGroup: parseInt(formData.radioGroup),
          checkboxGroup: formData.checkboxGroup.map((checkbox) => Number(checkbox)),
        };

        return {
          url: `${URL}`,
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useSendFormMutation } = formApi;
