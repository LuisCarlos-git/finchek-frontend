export interface ISignUpParams {
  name: string;
  email: string;
  password: string;
}

export interface ISignUpResponse {
  accessToken: string;
}

export interface ISignInParams {
  email: string;
  password: string;
}

export interface ISignInResponse {
  accessToken: string;
}
