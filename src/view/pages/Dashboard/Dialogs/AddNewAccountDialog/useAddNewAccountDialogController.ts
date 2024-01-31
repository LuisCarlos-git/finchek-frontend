import {
  schema,
  type CreateOrUpdateBankAccountFormValues
} from '@/app/formSchemas/createBankAccount';
import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useCreateBankAccount } from '@/app/hooks/queries/useCreateBankAccount';
import { currencyStringToNumber } from '@/app/utils/currencyStringToNumber';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export function useAddNewAccountDialogController() {
  const { newAccountDialogOpen, handleToggleNewAccountDialog } = useDashboard();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    control,
    reset
  } = useForm<CreateOrUpdateBankAccountFormValues>({
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    reset({
      name: '',
      initialBalance: '0',
      color: undefined,
      type: undefined
    });
  }, [reset, isSubmitSuccessful]);

  const { mutateAsync, isLoading } = useCreateBankAccount();

  const handleSubmit = hookFormHandleSubmit(
    async (formValues: CreateOrUpdateBankAccountFormValues) => {
      try {
        await mutateAsync({
          ...formValues,
          initialBalance: currencyStringToNumber(formValues.initialBalance)
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
