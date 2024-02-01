import { type IGetAllTransactionsParams } from '@/app/interfaces/services/TransactionsService';
import { transactionsService } from '@/app/services/http/transactionsService';
import { useQuery } from '@tanstack/react-query';

export function useGetAllTransactions(params: IGetAllTransactionsParams) {
  const query = useQuery({
    queryKey: ['get-all-transactions', { params }],
    queryFn: async () => await transactionsService.getAll(params)
  });

  return {
    ...query,
    data: query.data ?? []
  };
}
