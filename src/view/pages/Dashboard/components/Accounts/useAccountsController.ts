import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useGetAllBanckAccounts } from '@/app/hooks/queries/useGetAllBanckAccounts';
import { useMemo, useState } from 'react';

export const useAccountsController = () => {
  const {
    areValuesVisible,
    handleToggleVisibleValues,
    handleToggleNewAccountDialog,
    newAccountDialogOpen
  } = useDashboard();
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false
  });

  const { data, isLoading } = useGetAllBanckAccounts();

  const currentBalance = useMemo(() => {
    if (!data) return 0;

    return data.reduce((acc, item) => {
      return acc + item.currentBalance;
    }, 0);
  }, [data]);

  return {
    sliderState,
    setSliderState,
    areValuesVisible,
    handleToggleVisibleValues,
    isLoading,
    accounts: data,
    handleToggleNewAccountDialog,
    newAccountDialogOpen,
    currentBalance
  };
};
