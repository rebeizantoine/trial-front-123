import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const userRole = sessionStorage.getItem("userRole");
  return userRole === "jobseeker";
};

const JobseekerRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default JobseekerRoutes;
