import { bankAccountsService } from '@/app/services/http/bankAccountsService';
import { useQuery } from '@tanstack/react-query';

export const useGetAllBankAccounts = () => {
  const result = useQuery({
    queryKey: ['get-all-bank-accounts'],
    queryFn: bankAccountsService.getAll
  });

  return {
    ...result,
    data: result.data ?? []
  };
};
