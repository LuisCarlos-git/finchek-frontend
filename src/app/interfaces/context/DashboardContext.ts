import { type ReactNode } from 'react';

export type TransactionType = 'INCOME' | 'EXPENSE';

export interface IDashboardContext {
  areValuesVisible: boolean;
  newAccountDialogOpen: boolean;
  newTransactionDialogOpen: boolean;
  transactionType: TransactionType | null;
  handleToggleVisibleValues: () => void;
  handleToggleNewAccountDialog: () => void;
  handleToggleNewTransactionDialog: (type: TransactionType | null) => void;
}
export interface IDashboardProvider {
  children: ReactNode;
}
