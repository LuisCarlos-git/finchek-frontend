import { z } from 'zod';
import { BankAcountsType } from '../enums/BankAccountsType';

export const schema = z.object({
  initialBalance: z.string().nonempty('Saldo inicial é obrigatório'),
  name: z.string().nonempty('Nome da conta é obrigatório'),
  type: z.enum([
    BankAcountsType.CASH,
    BankAcountsType.CHECKING,
    BankAcountsType.INVESTMENT
  ]),
  color: z.string().nonempty('Cor é obrigatória')
});

export type CreateBankAccountFormValue = z.infer<typeof schema>;
