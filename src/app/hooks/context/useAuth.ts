import { useContext } from 'react';

import { AuthContext } from '@/app/context/AuthContext';
import { ContextProviderExeption } from '@/app/errors/ContextProviderExeption';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new ContextProviderExeption({
      hookName: 'useAuth',
      providerName: 'AuthProvider'
    });
  }

  return context;
};
