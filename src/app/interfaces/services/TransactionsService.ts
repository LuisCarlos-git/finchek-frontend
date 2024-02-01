import { type TransactionType } from '@/app/enums/TransactionType';
import { type ITransaction } from '../entities/Transaction';

export interface ICreateOrUpdateTransactionRequest extends ITransaction {}

export interface ITransactionResponse extends ITransaction {
  id: string;
  userId: string;
}

export interface IGetAllTransactionsParams {
  month: number;
  year: number;
  bankAccountId?: string;
  type?: TransactionType;
}
