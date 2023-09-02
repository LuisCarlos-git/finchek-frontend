import { RoutePaths } from '@/types/Routes';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={RoutePaths.LOGIN} element={<h1>login</h1>} />
      <Route path={RoutePaths.REGISTER} element={<h1>register</h1>} />
      <Route path={RoutePaths.DASHBOARD} element={<h1>dash</h1>} />
    </Routes>
  </BrowserRouter>
);
