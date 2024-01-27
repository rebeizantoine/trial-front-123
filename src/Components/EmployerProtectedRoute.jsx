import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const userRole = sessionStorage.getItem("userRole");
  return userRole === "employer";
};

const EmployerRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/loginemp" />;
};

export default EmployerRoutes;
