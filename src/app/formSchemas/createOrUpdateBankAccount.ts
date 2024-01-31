import { z } from 'zod';
import { BankAcountsType } from '../enums/BankAccountsType';

export const schema = z.object({
  initialBalance: z.union([
    z.string({ required_error: 'Saldo inicial é obrigatório' }),
    z.number()
  ]),
  name: z
    .string({ required_error: 'Nome da conta é obrigatório' })
    .nonempty('Nome da conta é obrigatório'),
  type: z.enum(
    [
      BankAcountsType.CASH,
      BankAcountsType.CHECKING,
      BankAcountsType.INVESTMENT
    ],
    { required_error: 'Escolha uma tipo de conta' }
  ),
  color: z.string({ required_error: 'Cor é obrigatória' })
});

export type CreateOrUpdateBankAccountFormValues = z.infer<typeof schema>;
