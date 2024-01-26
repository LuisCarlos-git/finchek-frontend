import { useMutation } from '@tanstack/react-query';
import { bankAccountsService } from '@/app/services/http/bankAccountsService';

export function useUpdateBankAccount() {
  return useMutation({
    mutationKey: ['update-bank-account'],
    mutationFn: bankAccountsService.update
  });
}
