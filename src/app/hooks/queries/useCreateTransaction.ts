import { transactionsService } from '@/app/services/http/transactionsService';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateBankAccounts } from './useInvalidateBankAccounts';

export function useCreateTransaction() {
  const { invalidateBankAccounts } = useInvalidateBankAccounts();
  return useMutation({
    mutationKey: ['create-transaction'],
    mutationFn: transactionsService.create,
    onSuccess: async () => {
      await invalidateBankAccounts();
    }
  });
}
