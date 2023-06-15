import axios from 'axios';
import { FormData } from './types';

export async function sendData(data: FormData) {
  const API_URL = 'https://api.sbercloud.ru/content/v1/bootcamp/frontend'; //TODO вынести в .env
  const response = await axios.post(API_URL, data);

  return response;
}
