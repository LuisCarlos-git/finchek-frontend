import { transactionsService } from '@/app/services/http/transactionsService';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateBankAccounts } from './useInvalidateBankAccounts';
import { useInvalidateTransactions } from './useInvalidateTransactions';

export function useCreateTransaction() {
  const { invalidateBankAccounts } = useInvalidateBankAccounts();
  const { invalidateTransactions } = useInvalidateTransactions();

  return useMutation({
    mutationKey: ['create-transaction'],
    mutationFn: transactionsService.create,
    onSuccess: async () => {
      await Promise.all([invalidateBankAccounts(), invalidateTransactions()]);
    }
  });
}
