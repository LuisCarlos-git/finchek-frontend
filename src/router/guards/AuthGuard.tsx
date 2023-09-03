import { Navigate, Outlet } from 'react-router-dom';

import { RoutePaths } from '@/app/Enums/Routes';

interface IAuthGuardProps {
  isPrivate?: boolean;
}

export const AuthGuard = ({ isPrivate = false }: IAuthGuardProps) => {
  const signedIn = false;

  if (!signedIn && isPrivate) {
    return <Navigate to={RoutePaths.LOGIN} replace />;
  }
  if (signedIn && !isPrivate) {
    return <Navigate to={RoutePaths.DASHBOARD} replace />;
  }

  return <Outlet />;
};
