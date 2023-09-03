import { z } from 'zod';

export const registerSchema = z.object({
  email: z
    .string()
    .email('Informe um e-mail válido')
    .nonempty('Informe um e-mail válido'),
  password: z
    .string()
    .min(8, 'Senha deve conter pelo menos 8 dígitos')
    .nonempty('Informe um senha válida'),
  name: z.string().nonempty('Informe seu nome de usuário')
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
