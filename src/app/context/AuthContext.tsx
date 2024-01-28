import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  type IAuthProviderProps,
  type IAuthContext
} from '../interfaces/context/AuthContext';

import { storage } from '../services/storage';
import { StorageKeys } from '../enums/StorageKeys';
import { useMe } from '../hooks/queries/useMe';
import { httpClient } from '../services/http/httpClient';
import { ConditionalRender } from '@/view/components/ConditionalRender';
import { Splash } from '@/view/components/Splash';
import { useQueryClient } from '@tanstack/react-query';

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const token = storage.get(StorageKeys.ACCESS_TOKEN);

    return !!token;
  });

  const {
    isError,
    isFetching,
    isSuccess,
    remove,
    data: user
  } = useMe(signedIn);

  const queryClient = useQueryClient();

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
    queryClient.clear();
  }, [queryClient, remove]);

  useEffect(() => {
    if (isError) {
      signOut();
    }
  }, [signOut, isError]);

  const value = useMemo(
    () => ({
      signedIn: isSuccess && signedIn,
      signIn,
      signOut,
      user: user ?? null
    }),
    [isSuccess, signIn, signOut, signedIn, user]
  );

  return (
    <ConditionalRender condition={isFetching} fallback={<Splash />}>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </ConditionalRender>
  );
};
