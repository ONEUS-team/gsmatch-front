import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: { element: ReactNode }) => {
  return localStorage.getItem("Access-Token") ? (
    element
  ) : (
    <Navigate to="/main"></Navigate>
  );
};

export default PrivateRoute;
