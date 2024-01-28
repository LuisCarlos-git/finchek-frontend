import { Endpoints } from '@/app/enums/Endpoints';
import { httpClient } from './httpClient';

import { type IUsersMeResponse } from '@/app/interfaces/services/UsersServices';

class UserService {
  async me() {
    const { data } = await httpClient.get<IUsersMeResponse>(Endpoints.ME);

    return data;
  }
}

export const usersService = new UserService();
