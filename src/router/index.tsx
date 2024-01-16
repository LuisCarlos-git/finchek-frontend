import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { RoutePaths } from '@/app/enums/Routes';

import { AuthGuard } from './guards/AuthGuard';

import { Login } from '@/view/pages/Login';
import { Register } from '@/view/pages/Register';
import { Dashboard } from '@/view/pages/Dashboard';

import { AuthLayout } from '@/view/_layouts/Auth';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AuthGuard />}>
        <Route element={<AuthLayout />}>
          <Route path={RoutePaths.LOGIN} element={<Login />} />
          <Route path={RoutePaths.REGISTER} element={<Register />} />
        </Route>
      </Route>

      <Route element={<AuthGuard isPrivate />}>
        <Route path={RoutePaths.DASHBOARD} element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
