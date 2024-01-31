import { bankAccountsService } from '@/app/services/http/bankAccountsService';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateBankAccounts } from './useInvalidateBankAccounts';

export function useDeleteBankAccount() {
  const { invalidateBankAccounts } = useInvalidateBankAccounts();

  return useMutation({
    mutationKey: ['delete-bank-account'],
    mutationFn: bankAccountsService.delete,
    onSuccess: async () => {
      await invalidateBankAccounts();
    }
  });
}
