import {
  type TransactionFormValues,
  transactionSchema
} from '@/app/formSchemas/transactionSchema';
import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useGetAllBankAccounts } from '@/app/hooks/queries/useGetAllBankAccounts';
import { useGetAllCategories } from '@/app/hooks/queries/useGetAllCategories';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

export function useNewTransactionDialogController() {
  const {
    handleToggleNewTransactionDialog,
    newTransactionDialogOpen,
    transactionType
  } = useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    control,
    formState: { errors }
  } = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema)
  });

  const { data: categories } = useGetAllCategories();
  const { data: bankAccounts } = useGetAllBankAccounts();

  const handleSubmit = hookFormSubmit((formValues: TransactionFormValues) => {
    console.log({ formValues });
  });

  const isExpense = transactionType === 'EXPENSE';

  const categoriesMapper = useMemo(
    () =>
      categories
        ?.filter((category) => category.type === transactionType)
        .map((category) => ({
          value: category.id,
          label: category.name
        })) ?? [],
    [categories, transactionType]
  );

  const bankAccountsMapper = useMemo(
    () =>
      bankAccounts.map((bankAccount) => ({
        value: bankAccount.id,
        label: bankAccount.name
      })) ?? [],
    [bankAccounts]
  );

  return {
    handleToggleNewTransactionDialog,
    newTransactionDialogOpen,
    isExpense,
    handleSubmit,
    register,
    control,
    errors,
    bankAccounts: bankAccountsMapper,
    categories: categoriesMapper
  };
}
