import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../Screens/Login/Index";
import SignupPage from "../Screens/Signup/Index";
import Subscriptions from "../Components/Transactions/TransactionsPage";
<<<<<<< HEAD

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      {/* <Route path="/transactions" element={<Subscriptions />} /> */}
    </Routes>
  );
};

export default PublicRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../Screens/Login/Index";
import SignupPage from "../Screens/Signup/Index";
=======
>>>>>>> 2b4c87e (Components/transactions (#20))

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<MiniDrawer />} />
      <Route path="/signup" element={<SignupPage />} />
      {/* <Route path="/transactions" element={<Subscriptions />} /> */}
    </Routes>
  );
};

export default PublicRoutes;
