// File: AdminRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const AdminRoute = ({ element }) => {
  const isAuthenticated = sessionStorage.getItem("authToken");
  const userRole = sessionStorage.getItem("userRole");

  if (!isAuthenticated || userRole !== "admin") {
    return <Navigate to="/login" />;
  }

  return <Route element={element} />;
};

export default AdminRoute;
