import { type ReactNode } from 'react';
import { type IUser } from '../entities/User';

export interface IAuthContext {
  signedIn: boolean;
  signIn: (accessToken: string) => void;
  signOut: () => void;
  user: IUser | null;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
