import { categoriesService } from '@/app/services/http/categoriesService';
import { useQuery } from '@tanstack/react-query';

export function useGetAllCategories() {
  return useQuery({
    queryKey: ['get-all-categories'],
    queryFn: categoriesService.getAll,
    staleTime: Infinity
  });
}
