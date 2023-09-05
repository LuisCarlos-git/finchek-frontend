import { type ReactNode } from 'react';

export interface IAuthContext {
  signedIn: boolean;
  signIn: (accessToken: string) => void;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
