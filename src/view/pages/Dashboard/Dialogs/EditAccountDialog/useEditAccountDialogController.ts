import {
  schema,
  type CreateOrUpdateBankAccountFormValues
} from '@/app/formSchemas/createBankAccount';
import { useDashboard } from '@/app/hooks/context/useDashboard';
import { useDeleteBankAccount } from '@/app/hooks/queries/useDeleteBankAccount';
import { useInvalidateBankAccounts } from '@/app/hooks/queries/useInvalidateBankAccounts';
import { useUpdateBankAccount } from '@/app/hooks/queries/useUpdateBankAccont';
import { currencyStringToNumber } from '@/app/utils/currencyStringToNumber';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export function useEditAccountDialog() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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

  const { mutateAsync: updateBankAccount, isLoading: isBankAccountLoading } =
    useUpdateBankAccount();
  const {
    mutateAsync: deleteBankAccount,
    isLoading: isDeleteBankAccountLoading
  } = useDeleteBankAccount();

  const { invalidateBankAccounts } = useInvalidateBankAccounts();

  const handleSubmit = hookFormHandleSubmit(
    async (formValues: CreateOrUpdateBankAccountFormValues) => {
      try {
        if (!bankAccountToEdit?.id) return;
        await updateBankAccount({
          ...formValues,
          initialBalance: currencyStringToNumber(formValues.initialBalance),
          id: bankAccountToEdit.id
        });
        await invalidateBankAccounts();
        handleToggleEditAccountDialog(null);
        toast.success('Conta editada com sucesso!');
      } catch (e) {
        toast.error('Erro ao editar dados conta');
      }
    }
  );

  const handleToggleDeleteDialog = useCallback(() => {
    setDeleteDialogOpen((prev) => !prev);
  }, []);

  const handleDeleteBankAccount = useCallback(async () => {
    try {
      if (!bankAccountToEdit?.id) return;

      await deleteBankAccount(bankAccountToEdit.id);
      handleToggleDeleteDialog();
      handleToggleEditAccountDialog(null);
      toast.success('Conta execluida com sucesso!');
    } catch {
      toast.error('Falha ao excluir conta!');
    }
  }, [
    bankAccountToEdit?.id,
    deleteBankAccount,
    handleToggleDeleteDialog,
    handleToggleEditAccountDialog
  ]);

  return {
    editAccountDialogOpen,
    handleToggleEditAccountDialog,
    register,
    errors,
    control,
    handleSubmit,
    isEditBankAccountLoading: isBankAccountLoading || isSubmitting,
    isDeleteBankAccountLoading,
    handleDeleteBankAccount,
    deleteDialogOpen,
    handleToggleDeleteDialog
  };
}
