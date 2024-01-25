import {
  schema,
  type CreateBankAccountFormValue
} from '@/app/formSchemas/createBankAccount';
import { useDashboard } from '@/app/hooks/context/useDashboard';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export function useAddNewAccountDialogController() {
  const { newAccountDialogOpen, handleToggleNewAccountDialog } = useDashboard();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control
  } = useForm<CreateBankAccountFormValue>({
    resolver: zodResolver(schema)
  });

  const handleSubmit = hookFormHandleSubmit(
    async (formValues: CreateBankAccountFormValue) => {
      console.log({ formValues });
    }
  );

  return {
    newAccountDialogOpen,
    handleToggleNewAccountDialog,
    register,
    errors,
    control,
    handleSubmit
  };
}
