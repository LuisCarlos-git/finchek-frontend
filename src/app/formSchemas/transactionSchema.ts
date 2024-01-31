import { z } from 'zod';

export const transactionSchema = z.object({
  value: z.string({ required_error: 'Informe o valor da transação' }),
  name: z
    .string({ required_error: 'Informe o nome' })
    .nonempty('Informe o nome'),
  categoryId: z.string({ required_error: 'Informe uma categoria' }),
  bankAccountId: z.string({ required_error: 'Informe uma conta' }),
  date: z.date()
});

export type TransactionFormValues = z.infer<typeof transactionSchema>;
