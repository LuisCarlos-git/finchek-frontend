import { type BankAcountsType } from '@/app/enums/BankAccountsType';

export interface ICreateBankAccount {
  name: string;
  initialBalance: number;
  color: string;
  type: BankAcountsType;
}

export interface IUpdateBankAccountParams {
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  type: BankAcountsType;
}
