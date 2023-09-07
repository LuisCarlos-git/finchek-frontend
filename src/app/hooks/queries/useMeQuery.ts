import { QueryKeys } from '@/app/constants/queryKeys';
import { usersService } from '@/app/services/http/userService';
import { useQuery } from '@tanstack/react-query';

export const useMeQuery = (enabled = false) => {
  return useQuery({
    queryKey: QueryKeys.ME,
    queryFn: async () => await usersService.me(),
    enabled,
    staleTime: Infinity
  });
};
