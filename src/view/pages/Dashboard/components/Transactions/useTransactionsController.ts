import { useDashboard } from '@/app/hooks/context/useDashboard';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();
  return {
    areValuesVisible,
    isLoading: false
  };
}