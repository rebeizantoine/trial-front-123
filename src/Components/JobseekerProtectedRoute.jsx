// File: JobseekerProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const JobseekerProtectedRoute = ({ element }) => {
  const isAuthenticated = sessionStorage.getItem("authToken");
  const userRole = sessionStorage.getItem("userRole");

  if (!isAuthenticated || userRole !== "jobseeker") {
    return <Navigate to="/login" />;
  }

  return <Route element={element} />;
};

export default JobseekerProtectedRoute;
