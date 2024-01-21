import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useCallback, useState } from 'react';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isOpenFilters, setIsOpenFilters] = useState(true);

  const handleToggleDialogFilters = useCallback(() => {
    setIsOpenFilters((prev) => !prev);
  }, []);

  return {
    areValuesVisible,
    isInitialLoading: false,
    isFetching: false,
    transactions: [],
    isOpenFilters,
    handleToggleDialogFilters
  };
}
