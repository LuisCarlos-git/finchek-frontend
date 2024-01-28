import {
  schema,
  type CreateOrUpdateBankAccountFormValues
} from '@/app/formSchemas/createBankAccount';
import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useCreateBankAccount } from '@/app/hooks/queries/useCreateBankAccount';
import { currencyStringToNumber } from '@/app/utils/currencyStringToNumber';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export function useAddNewAccountDialogController() {
  const { newAccountDialogOpen, handleToggleNewAccountDialog } = useDashboard();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    control,
    reset
  } = useForm<CreateOrUpdateBankAccountFormValues>({
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    reset({
      color: undefined,
      initialBalance: '0',
      name: undefined,
      type: undefined
    });
  }, [reset, isSubmitSuccessful]);

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useCreateBankAccount();

  const handleSubmit = hookFormHandleSubmit(
    async (formValues: CreateOrUpdateBankAccountFormValues) => {
      try {
        await mutateAsync({
          ...formValues,
          initialBalance: currencyStringToNumber(formValues.initialBalance)
        });
        await queryClient.invalidateQueries({
          queryKey: ['get-all-bank-accounts']
        });
        toast.success('Conta cadastrada com sucesso!');
        handleToggleNewAccountDialog();
      } catch (e) {
        toast.error('Erro ao cadastrar conta');
      }
    }
  );

  return {
    newAccountDialogOpen,
    handleToggleNewAccountDialog,
    register,
    errors,
    control,
    handleSubmit,
    isLoading: isLoading || isSubmitting
  };
}
