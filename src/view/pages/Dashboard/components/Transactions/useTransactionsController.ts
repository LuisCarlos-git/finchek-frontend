import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useGetAllTransactions } from '@/app/hooks/queries/useGetAllTransactions';
import { type IGetAllTransactionsParams } from '@/app/interfaces/services/TransactionsService';
import { useCallback, useEffect, useState } from 'react';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [filters, setFilters] = useState<IGetAllTransactionsParams>({
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  });

  const handleChangeFilters = useCallback(
    (filters: Partial<IGetAllTransactionsParams>) => {
      setFilters((prev) => ({ ...prev, ...filters }));
    },
    []
  );

  const handleToggleDialogFilters = useCallback(() => {
    setIsOpenFilters((prev) => !prev);
  }, []);

  const {
    data: transactions,
    isLoading,
    isFetching,
    refetch
  } = useGetAllTransactions(filters);

  useEffect(() => {
    void refetch();
  }, [refetch, filters]);

  return {
    areValuesVisible,
    isInitialLoading: isLoading,
    isFetching,
    transactions,
    isOpenFilters,
    handleToggleDialogFilters,
    handleChangeFilters,
    filters
  };
}
