import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: { element: ReactNode }) => {
  return localStorage.getItem("accessToken") ? (
    element
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
