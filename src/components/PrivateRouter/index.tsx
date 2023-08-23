import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: any) => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return isLoggedin ? element : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
