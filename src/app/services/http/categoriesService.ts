import { Endpoints } from '@/app/enums/Endpoints';
import { httpClient } from './httpClient';

import { type IGetAllCategories } from '@/app/interfaces/services/CategoriesService';

class CategoriesService {
  async getAll() {
    const { data } = await httpClient.get<IGetAllCategories>(
      Endpoints.CATEGORIES
    );

    return data;
  }
}

export const categoriesService = new CategoriesService();
