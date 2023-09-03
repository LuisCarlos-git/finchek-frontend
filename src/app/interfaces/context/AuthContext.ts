import { type ReactNode } from 'react';

export interface IAuthContext {
  signed: boolean;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
