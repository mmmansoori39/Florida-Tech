import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import { AuthContex } from "../context/auth-context";

const RequireAuth = () => {
  let data = JSON.parse(localStorage.getItem("logtype"));
  return data ? <Outlet /> : <Navigate to="/" />;
};
export default RequireAuth;
