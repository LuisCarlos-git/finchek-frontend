import { type ReactNode } from 'react';

export interface IAuthContext {
  signedIn: boolean;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
