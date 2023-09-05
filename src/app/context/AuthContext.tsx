import { createContext, useCallback, useState } from 'react';

import {
  type IAuthProviderProps,
  type IAuthContext
} from '../interfaces/context/AuthContext';

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [signedIn, setSignedIn] = useState(false);

  const signIn = useCallback((accessToken: string) => {
    console.log({ accessToken });
    setSignedIn(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
