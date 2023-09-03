export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  accessToken: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
}
