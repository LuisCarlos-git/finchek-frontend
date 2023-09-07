import { createContext, useCallback, useEffect, useState } from 'react';

import {
  type IAuthProviderProps,
  type IAuthContext
} from '../interfaces/context/AuthContext';

import { storage } from '../services/storage';
import { StorageKeys } from '../Enums/StorageKeys';
import { useMeQuery } from '../hooks/queries/useMeQuery';
import { httpClient } from '../services/http/httpClient';
import { ConditionalRender } from '@/view/components/ConditionalRender';
import { Splash } from '@/view/components/Splash';

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const token = storage.get(StorageKeys.ACCESS_TOKEN);

    return !!token;
  });

  const { isError, isFetching, isSuccess, remove } = useMeQuery(signedIn);

  const signIn = useCallback((accessToken: string) => {
    storage.set({
      key: StorageKeys.ACCESS_TOKEN,
      value: accessToken
    });

    httpClient.defaults.headers.Authorization = `Bearer ${accessToken}`;

    setSignedIn(!!accessToken);
  }, []);

  const signOut = useCallback(() => {
    storage.remove(StorageKeys.ACCESS_TOKEN);
    remove();
    setSignedIn(false);
  }, [remove]);

  useEffect(() => {
    if (isError) {
      signOut();
    }
  }, [signOut, isError]);

  return (
    <ConditionalRender condition={isFetching} fallback={<Splash />}>
      <AuthContext.Provider
        value={{
          signedIn: isSuccess && signedIn,
          signIn,
          signOut
        }}
      >
        {children}
      </AuthContext.Provider>
    </ConditionalRender>
  );
};
