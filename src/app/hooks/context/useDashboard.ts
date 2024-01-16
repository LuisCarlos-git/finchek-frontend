import { useContext } from 'react';

import { DashboardContext } from '@/app/context/DashboardContext';
import { ContextProviderExeption } from '@/app/errors/ContextProviderExeption';

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new ContextProviderExeption({
      hookName: 'useDashboard',
      providerName: 'DashboardProvider'
    });
  }

  return context;
}
