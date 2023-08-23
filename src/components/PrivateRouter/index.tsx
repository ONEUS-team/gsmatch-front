import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component }: any) => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return isLoggedin ? component : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
