import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useState } from 'react';

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

  return {
    sliderState,
    setSliderState,
    areValuesVisible,
    handleToggleVisibleValues,
    isLoading: false,
    accounts: [],
    handleToggleNewAccountDialog,
    newAccountDialogOpen
  };
};
