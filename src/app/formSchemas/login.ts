import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email('Informe um e-mail válido')
    .nonempty('Informe um e-mail válido'),
  password: z
    .string()
    .nonempty('Informe um senha válida')
    .min(8, 'Senha deve conter pelo menos 8 dígitos')
});

export type LoginFormValues = z.infer<typeof loginSchema>;
