import { Endpoints } from '../Enums/Endpoints';

import {
  type SignUpParams,
  type SignUpResponse,
  type SignInParams,
  type SignInResponse
} from '../interfaces/services/AuthService';

import { httpClient } from './httpClient';

export class AuthServices {
  async signUp(params: SignUpParams): Promise<SignUpResponse> {
    const { data } = await httpClient.post<SignUpResponse>(
      Endpoints.SIGNUP,
      params
    );

    return data;
  }

  async signIn(params: SignInParams): Promise<SignInResponse> {
    const { data } = await httpClient.post<SignInResponse>(
      Endpoints.SIGNIN,
      params
    );

    return data;
  }
}

export const authServices = new AuthServices();
