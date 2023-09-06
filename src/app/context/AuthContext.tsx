import { createContext, useCallback, useState } from 'react';

import {
  type IAuthProviderProps,
  type IAuthContext
} from '../interfaces/context/AuthContext';
import { storage } from '../services/storage';
import { StorageKeys } from '../Enums/StorageKeys';

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const token = storage.get(StorageKeys.ACCESS_TOKEN);

    return !!token;
  });

  const signIn = useCallback((accessToken: string) => {
    storage.set({
      key: StorageKeys.ACCESS_TOKEN,
      value: accessToken
    });
    setSignedIn(!!accessToken);
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
