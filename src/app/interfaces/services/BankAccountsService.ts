import { type BankAcountsType } from '@/app/enums/BankAccountsType';

export interface ICreateBankAccountParams {
  name: string;
  initialBalance: number;
  color: string;
  type: BankAcountsType;
}

export interface IGetAllBankAccountsResponse {
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  currentBalance: number;
}
