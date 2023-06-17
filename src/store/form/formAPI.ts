import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FormData } from './types';

const URL = 'https://api.sbercloud.ru/content/v1/bootcamp/frontend'; //TODO вынести в .env

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}`,
  }),
  endpoints: (build) => ({
    sendForm: build.mutation<unknown, FormData>({
      query: (formData) => {
        return {
          url: `${URL}`,
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
});

export const { useSendFormMutation } = formApi;
