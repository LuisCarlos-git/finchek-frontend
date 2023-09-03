import { createContext } from 'react';

import {
  type IAuthProviderProps,
  type IAuthContext
} from '../interfaces/context/AuthContext';

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
