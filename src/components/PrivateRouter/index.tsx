import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: { element: ReactNode }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  // setIsLoggedin(true);

  return isLoggedin ? element : <Navigate to="/main"></Navigate>;
};

export default PrivateRoute;
