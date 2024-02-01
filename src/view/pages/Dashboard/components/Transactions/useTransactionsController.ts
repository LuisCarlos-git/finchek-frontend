import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useGetAllTransactions } from '@/app/hooks/queries/useGetAllTransactions';
import { useCallback, useState } from 'react';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const handleToggleDialogFilters = useCallback(() => {
    setIsOpenFilters((prev) => !prev);
  }, []);

  const {
    data: transactions,
    isLoading,
    isFetching
  } = useGetAllTransactions({
    month: 1,
    year: 2024,
    bankAccountId: 'e0311546-4a5b-4d2b-b1fd-f1c9397e680b'
  });

  return {
    areValuesVisible,
    isInitialLoading: isLoading,
    isFetching,
    transactions,
    isOpenFilters,
    handleToggleDialogFilters
  };
}
