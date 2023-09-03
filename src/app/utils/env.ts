import { z } from 'zod';
import { InvalidEnviromentExeption } from '../errors/InvalidEnviromentExeption';

const envSchema = z.object({
  VITE_APP_APIURL: z.string().nonempty()
});

const _env = envSchema.safeParse(import.meta.env);

if (!_env.success) {
  console.error(_env.error.format());
  throw new InvalidEnviromentExeption();
}

export const env = _env.data;
