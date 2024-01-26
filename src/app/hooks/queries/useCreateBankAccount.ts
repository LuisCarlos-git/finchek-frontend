import { bankAccountsService } from '@/app/services/http/bankAccountsService';
import { useMutation } from '@tanstack/react-query';

export function useCreateBankAccount() {
  return useMutation({
    mutationKey: ['create-bank-account'],
    mutationFn: bankAccountsService.create
  });
}
