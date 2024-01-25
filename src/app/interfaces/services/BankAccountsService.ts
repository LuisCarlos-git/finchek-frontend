import { type BankAcountsType } from '@/app/enums/BankAccountsType';

export interface CreateBankAccountParams {
  name: string;
  initialBalance: number;
  color: string;
  type: BankAcountsType;
}
