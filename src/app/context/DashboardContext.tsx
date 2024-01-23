import { createContext, useCallback, useState } from 'react';
import {
  type IDashboardContext,
  type IDashboardProvider
} from '../interfaces/context/DashboardContext';

export const DashboardContext = createContext<IDashboardContext | null>(null);

export function DashboardProvider({ children }: IDashboardProvider) {
  const [areValuesVisible, setAreValueVisible] = useState(false);
  const [newAccountDialogOpen, setNewAccountDialogOpen] = useState(false);

  const handleToggleVisibleValues = useCallback(() => {
    setAreValueVisible((prev) => !prev);
  }, []);

  const handleToggleNewAccountDialog = useCallback(() => {
    setNewAccountDialogOpen((prev) => !prev);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        handleToggleVisibleValues,
        handleToggleNewAccountDialog,
        newAccountDialogOpen
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
