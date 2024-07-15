import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Screens/Dashboard/Index";

const PrivateRoutes: React.FC = () => {
  return <Routes>
    <Route path="/dashboard" element={<Dashboard/ >}/>
  </Routes>;
};

export default PrivateRoutes;
