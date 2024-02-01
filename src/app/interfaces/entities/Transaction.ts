import { type TransactionType } from '@/app/enums/TransactionType';

export interface ITransaction {
  date: string;
  name: string;
  type: TransactionType;
  value: number;
  bankAccountId: string;
  categoryId: string;
}
