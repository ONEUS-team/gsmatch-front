import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: { element: ReactNode }) => {
  return element;
};

export default PrivateRoute;
