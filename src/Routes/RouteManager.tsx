import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { localStorageKeys } from '../dbOperations/config';

const RouteManager: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem(localStorageKeys.user);

  return (
    <BrowserRouter>
      <PublicRoutes />
      {isAuthenticated && <PrivateRoutes />}
    </BrowserRouter>
  );
};

export default RouteManager;
