import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { RoutePaths } from '@/types/Routes';
import { AuthGuard } from './guards/AuthGuard';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AuthGuard />}>
        <Route path={RoutePaths.LOGIN} element={<h1>login</h1>} />
        <Route path={RoutePaths.REGISTER} element={<h1>register</h1>} />
      </Route>
      <Route element={<AuthGuard isPrivate />}>
        <Route path={RoutePaths.DASHBOARD} element={<h1>dashboard</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
