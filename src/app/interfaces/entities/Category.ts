import { type TransactionType } from '@/app/enums/TransactionType';

export interface ICategory {
  id: string;
  userId: string;
  name: string;
  icon: string;
  type: TransactionType;
}
