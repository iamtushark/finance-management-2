import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { localStorageKeys } from "../dbOperations/config";

const RouteManager: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem(localStorageKeys.user);

  return (
<<<<<<< HEAD
    <>
      <BrowserRouter>
        <PublicRoutes />
        {isAuthenticated && <PrivateRoutes />}
      </BrowserRouter>
    </>
=======
    <BrowserRouter>
      <PublicRoutes />
      {isAuthenticated && <PrivateRoutes />}
    </BrowserRouter>
>>>>>>> fe8ff64 (Dev (#12))
  );
};

export default RouteManager;
