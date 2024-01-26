// File: EmployerRoute.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const EmployerRoute = ({ element }) => {
  const isAuthenticated = sessionStorage.getItem("authToken");
  const userRole = sessionStorage.getItem("userRole");

  if (!isAuthenticated || userRole !== "employer") {
    return <Navigate to="/login" />;
  }

  // Define the employer routes configuration
  const employerRoutes = [
    {
      path: "/employerpp/:usernameEmployer",
      element: element,
    },
    {
      path: "/employerpp",
      element: element,
    },
    // Add more routes if needed
  ];

  // Use the Routes component to render the employer routes
  return <Routes routes={employerRoutes} />;
};

export default EmployerRoute;
