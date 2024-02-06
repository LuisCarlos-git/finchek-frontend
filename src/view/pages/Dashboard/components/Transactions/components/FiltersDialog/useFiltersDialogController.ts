import { useGetAllBankAccounts } from '@/app/hooks/queries/useGetAllBankAccounts';
import { useCallback, useState } from 'react';

export function useFiltersDialogController() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | undefined
  >();

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleSelectbankAccount = useCallback((bankAccountId: string) => {
    setSelectedBankAccountId((prev) =>
      bankAccountId === prev ? undefined : bankAccountId
    );
  }, []);

  const { data: accounts } = useGetAllBankAccounts();

  const handleChangeYear = useCallback((step: number) => {
    setSelectedYear((prev) => prev + step);
  }, []);

  return {
    selectedBankAccountId,
    handleSelectbankAccount,
    selectedYear,
    handleChangeYear,
    accounts
  };
}
