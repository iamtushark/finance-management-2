import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Screens/Dashboard/Index";
import BudgetPage from "../Screens/Budget/Index";

const PrivateRoutes: React.FC = () => {
  return <Routes>
    <Route path="/dashboard" element={<Dashboard/ >}/>
    <Route path="/budget" element={<BudgetPage/>}/>
  </Routes>;
};

export default PrivateRoutes;
