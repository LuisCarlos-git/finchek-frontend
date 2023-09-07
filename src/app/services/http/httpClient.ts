import axios from 'axios';

import { env } from '../../utils/env';
import { storage } from '../storage';
import { StorageKeys } from '@/app/Enums/StorageKeys';
import { sleep } from '@/app/utils/sleep';

export const httpClient = axios.create({
  baseURL: env.VITE_APP_APIURL
});

httpClient.interceptors.request.use((config) => {
  const token = storage.get(StorageKeys.ACCESS_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

httpClient.interceptors.response.use(async (config) => {
  await sleep();
  return config;
});
