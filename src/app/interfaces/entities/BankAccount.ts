import { type BankAcountsType } from '@/app/enums/BankAccountsType';

export interface IBankAccount {
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  currentBalance: number;
  type: BankAcountsType;
}
