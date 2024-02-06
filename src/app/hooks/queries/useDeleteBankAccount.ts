import { bankAccountsService } from '@/app/services/http/bankAccountsService';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateBankAccounts } from './useInvalidateBankAccounts';
import { useInvalidateTransactions } from './useInvalidateTransactions';

export function useDeleteBankAccount() {
  const { invalidateBankAccounts } = useInvalidateBankAccounts();
  const { invalidateTransactions } = useInvalidateTransactions();

  return useMutation({
    mutationKey: ['delete-bank-account'],
    mutationFn: bankAccountsService.delete,
    onSuccess: async () => {
      await Promise.all([invalidateBankAccounts(), invalidateTransactions()]);
    }
  });
}
