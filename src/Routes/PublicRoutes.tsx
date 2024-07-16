import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../Screens/Login/Index";
import SignupPage from "../Screens/Signup/Index";
import MiniDrawer from "../Components/Common/CommonSideBar";

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
