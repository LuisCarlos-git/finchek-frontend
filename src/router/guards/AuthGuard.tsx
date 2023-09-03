import { RoutePaths } from '@/app/types/Routes';
import { Navigate, Outlet } from 'react-router-dom';

interface AuthGuardProps {
  isPrivate?: boolean;
}

export const AuthGuard = ({ isPrivate = false }: AuthGuardProps) => {
  const signedIn = false;

  if (!signedIn && isPrivate) {
    return <Navigate to={RoutePaths.LOGIN} replace />;
  }
  if (signedIn && !isPrivate) {
    return <Navigate to={RoutePaths.DASHBOARD} replace />;
  }

  return <Outlet />;
};
