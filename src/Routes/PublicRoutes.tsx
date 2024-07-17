import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../Screens/Login/Index";
import SignupPage from "../Screens/Signup/Index";
import Expenses from "../Screens/Expense/Index";
import Incomes from "../Screens/Income/Index";

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default PublicRoutes;
