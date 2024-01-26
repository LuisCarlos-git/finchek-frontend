import { createContext, useCallback, useMemo, useState } from 'react';
import {
  type IDashboardContext,
  type IDashboardProvider,
  type TransactionType
} from '../interfaces/context/DashboardContext';
import { type IBankAccount } from '../interfaces/entities/BankAccount';

export const DashboardContext = createContext<IDashboardContext | null>(null);

export function DashboardProvider({ children }: IDashboardProvider) {
  const [transactionType, setTransactionType] =
    useState<TransactionType | null>(null);

  const [areValuesVisible, setAreValueVisible] = useState(false);
  const [newAccountDialogOpen, setNewAccountDialogOpen] = useState(false);
  const [editAccountDialogOpen, setEditAccountDialogOpen] = useState(false);
  const [newTransactionDialogOpen, setNewTransactionDialogOpen] =
    useState(false);

  const [bankAccountToEdit, setBankAccountToEdit] =
    useState<IBankAccount | null>(null);

  const handleToggleVisibleValues = useCallback(() => {
    setAreValueVisible((prev) => !prev);
  }, []);

  const handleToggleNewAccountDialog = useCallback(() => {
    setNewAccountDialogOpen((prev) => !prev);
  }, []);

  const handleToggleEditAccountDialog = useCallback(
    (accountToEdit: IBankAccount | null) => {
      setEditAccountDialogOpen((prev) => !prev);
      setBankAccountToEdit(accountToEdit);
    },
    []
  );

  const handleToggleNewTransactionDialog = useCallback(
    (type: TransactionType | null) => {
      setTransactionType(type);
      setNewTransactionDialogOpen((prev) => !prev);
    },
    []
  );

  const value = useMemo(
    () => ({
      areValuesVisible,
      newAccountDialogOpen,
      handleToggleVisibleValues,
      handleToggleNewAccountDialog,
      handleToggleNewTransactionDialog,
      newTransactionDialogOpen,
      transactionType,
      handleToggleEditAccountDialog,
      editAccountDialogOpen,
      bankAccountToEdit
    }),
    [
      areValuesVisible,
      bankAccountToEdit,
      editAccountDialogOpen,
      handleToggleEditAccountDialog,
      handleToggleNewAccountDialog,
      handleToggleNewTransactionDialog,
      handleToggleVisibleValues,
      newAccountDialogOpen,
      newTransactionDialogOpen,
      transactionType
    ]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
