import { useDashboard } from '@/app/hooks/context/useDashboard';

export function useNewTransactionDialogController() {
  const {
    handleToggleNewTransactionDialog,
    newTransactionDialogOpen,
    transactionType
  } = useDashboard();

  const isExpense = transactionType === 'EXPENSE';

  return {
    handleToggleNewTransactionDialog,
    newTransactionDialogOpen,
    isExpense
  };
}
