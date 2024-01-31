import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

export function useInvalidateBankAccounts() {
  const queryClient = useQueryClient();

  const invalidateBankAccounts = useCallback(async () => {
    await queryClient.invalidateQueries({
      queryKey: ['get-all-bank-accounts']
    });
  }, [queryClient]);

  return { invalidateBankAccounts };
}
