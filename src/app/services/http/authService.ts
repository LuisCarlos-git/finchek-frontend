import { Endpoints } from '../../Enums/Endpoints';

import {
  type ISignUpParams,
  type ISignUpResponse,
  type ISignInParams,
  type ISignInResponse
} from '../../interfaces/services/AuthService';

import { httpClient } from './httpClient';

export class AuthServices {
  async signUp(params: ISignUpParams): Promise<ISignUpResponse> {
    const { data } = await httpClient.post<ISignUpResponse>(
      Endpoints.SIGNUP,
      params
    );

    return data;
  }

  async signIn(params: ISignInParams): Promise<ISignInResponse> {
    const { data } = await httpClient.post<ISignInResponse>(
      Endpoints.SIGNIN,
      params
    );

    return data;
  }
}

export const authServices = new AuthServices();
