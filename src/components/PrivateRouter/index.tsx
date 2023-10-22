import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: any) => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return isLoggedin ? element : <Navigate to="/main"></Navigate>;
};

export default PrivateRoute;
