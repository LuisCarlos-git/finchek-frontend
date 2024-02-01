import {
  type TransactionFormValues,
  transactionSchema
} from '@/app/formSchemas/transactionSchema';
import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useCreateTransaction } from '@/app/hooks/queries/useCreateTransaction';
import { useGetAllBankAccounts } from '@/app/hooks/queries/useGetAllBankAccounts';
import { useGetAllCategories } from '@/app/hooks/queries/useGetAllCategories';
import { currencyStringToNumber } from '@/app/utils/currencyStringToNumber';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

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
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema)
  });

  useEffect(() => {
    reset({
      bankAccountId: undefined,
      categoryId: undefined,
      name: '',
      value: '0',
      date: new Date()
    });
  }, [reset, isSubmitSuccessful]);

  const { data: categories } = useGetAllCategories();
  const { data: bankAccounts } = useGetAllBankAccounts();

  const { mutateAsync: createTransaction, isLoading } = useCreateTransaction();

  const isExpense = transactionType === 'EXPENSE';

  const handleSubmit = hookFormSubmit(
    async (formValues: TransactionFormValues) => {
      if (!transactionType) return;
      try {
        await createTransaction({
          ...formValues,
          date: new Date(formValues.date).toISOString(),
          type: transactionType,
          value: currencyStringToNumber(formValues.value)
        });
        handleToggleNewTransactionDialog(null);
        toast.success(
          isExpense
            ? 'Despesa cadastrada com sucesso!'
            : 'Receita cadastrada com sucesso!!'
        );
      } catch (error) {
        toast.error(
          isExpense
            ? 'Falha ao cadastrar despesa!'
            : 'Falha ao cadastrar receita!'
        );
      }
    }
  );

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
    categories: categoriesMapper,
    isLoading: isLoading || isSubmitting
  };
}
