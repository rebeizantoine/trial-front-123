import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const userRole = sessionStorage.getItem("userRole");
  return userRole === "admin";
};

const AdminRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/adminlogin" />;
};

export default AdminRoutes;
