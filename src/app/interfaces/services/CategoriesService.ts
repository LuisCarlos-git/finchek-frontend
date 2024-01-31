import { type TransactionType } from '@/app/enums/TransactionType';

export type IGetAllCategories = Array<{
  id: string;
  userId: string;
  name: string;
  icon: string;
  type: TransactionType;
}>;
