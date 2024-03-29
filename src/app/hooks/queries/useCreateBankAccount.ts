import { bankAccountsService } from '@/app/services/http/bankAccountsService';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateBankAccounts } from './useInvalidateBankAccounts';

export function useCreateBankAccount() {
  const { invalidateBankAccounts } = useInvalidateBankAccounts();

  return useMutation({
    mutationKey: ['create-bank-account'],
    mutationFn: bankAccountsService.create,
    onSuccess: async () => {
      await invalidateBankAccounts();
    }
  });
}
