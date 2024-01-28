import {
  schema,
  type CreateOrUpdateBankAccountFormValues
} from '@/app/formSchemas/createBankAccount';
import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useUpdateBankAccount } from '@/app/hooks/queries/useUpdateBankAccont';
import { currencyStringToNumber } from '@/app/utils/currencyStringToNumber';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export function useEditAccountDialog() {
  const {
    editAccountDialogOpen,
    handleToggleEditAccountDialog,
    bankAccountToEdit
  } = useDashboard();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors, isSubmitting },
    control,
    setValue
  } = useForm<CreateOrUpdateBankAccountFormValues>({
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    if (!bankAccountToEdit) return;

    setValue('color', bankAccountToEdit.color);
    setValue('name', bankAccountToEdit.name);
    setValue('initialBalance', bankAccountToEdit.initialBalance);
    setValue('type', bankAccountToEdit.type);
  }, [bankAccountToEdit, setValue]);

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useUpdateBankAccount();

  const handleSubmit = hookFormHandleSubmit(
    async (formValues: CreateOrUpdateBankAccountFormValues) => {
      try {
        if (!bankAccountToEdit?.id) return;
        await mutateAsync({
          ...formValues,
          initialBalance: currencyStringToNumber(formValues.initialBalance),
          id: bankAccountToEdit.id
        });
        await queryClient.invalidateQueries({
          queryKey: ['get-all-bank-accounts']
        });
        handleToggleEditAccountDialog(null);
        toast.success('Conta editada com sucesso!');
      } catch (e) {
        toast.error('Erro ao editar dados conta');
      }
    }
  );

  return {
    editAccountDialogOpen,
    handleToggleEditAccountDialog,
    register,
    errors,
    control,
    handleSubmit,
    isLoading: isLoading || isSubmitting
  };
}
