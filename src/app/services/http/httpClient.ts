import axios from 'axios';

import { env } from '../../utils/env';

export const httpClient = axios.create({
  baseURL: env.VITE_APP_APIURL
});
