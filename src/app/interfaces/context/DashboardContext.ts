import { type ReactNode } from 'react';
import { type IBankAccount } from '../entities/BankAccount';

export type TransactionType = 'INCOME' | 'EXPENSE';

export interface IDashboardProvider {
  children: ReactNode;
}

export interface IDashboardContext {
  areValuesVisible: boolean;
  newAccountDialogOpen: boolean;
  newTransactionDialogOpen: boolean;
  editAccountDialogOpen: boolean;
  transactionType: TransactionType | null;
  bankAccountToEdit: IBankAccount | null;
  handleToggleVisibleValues: () => void;
  handleToggleNewAccountDialog: () => void;
  handleToggleEditAccountDialog: (accountToEdit: IBankAccount | null) => void;
  handleToggleNewTransactionDialog: (type: TransactionType | null) => void;
}
