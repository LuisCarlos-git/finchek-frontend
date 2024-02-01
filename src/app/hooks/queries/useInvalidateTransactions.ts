import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

export function useInvalidateTransactions() {
  const queryClient = useQueryClient();

  const invalidateTransactions = useCallback(async () => {
    await queryClient.invalidateQueries({
      queryKey: ['get-all-transactions']
    });
  }, [queryClient]);

  return { invalidateTransactions };
}
