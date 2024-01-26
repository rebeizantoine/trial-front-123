import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, adminOnly = false }) => {
  const isAuthenticated = sessionStorage.getItem("authToken");
  const userRole = getUserRole(); // You need to implement this function

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  if (adminOnly && userRole !== "admin") {
    // Redirect to a non-privileged page if admin role is required but user is not an admin
    return <Navigate to="/" />;
  }

  // Render the original route if authentication and role checks pass
  return <Route element={element} />;
};

export default ProtectedRoute;
