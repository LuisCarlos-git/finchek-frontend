import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useGetAllBankAccounts } from '@/app/hooks/queries/useGetAllBankAccounts';
import { useMemo, useState } from 'react';

export const useAccountsController = () => {
  const {
    areValuesVisible,
    handleToggleVisibleValues,
    handleToggleNewAccountDialog,
    newAccountDialogOpen,
    handleToggleEditAccountDialog
  } = useDashboard();
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false
  });

  const { data, isLoading } = useGetAllBankAccounts();

  const currentBalance = useMemo(() => {
    if (!data) return 0;

    return data.reduce((acc, item) => {
      return acc + item.currentBalance;
    }, 0);
  }, [data]);

  return {
    sliderState,
    accounts: data,
    areValuesVisible,
    isLoading,
    newAccountDialogOpen,
    currentBalance,
    handleToggleVisibleValues,
    setSliderState,
    handleToggleNewAccountDialog,
    handleToggleEditAccountDialog
  };
};
