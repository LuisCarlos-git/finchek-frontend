import { httpClient } from './httpClient';

import { type IUsersMeResponse } from '@/app/interfaces/services/UsersServices';

class UserService {
  async me() {
    const { data } = await httpClient.get<IUsersMeResponse>('/users/me');

    return data;
  }
}

export const usersService = new UserService();
