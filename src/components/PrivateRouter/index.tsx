import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: any) => {
  // const [isLoggedin, setIsLoggedin] = useState(false);

  return element;
};

export default PrivateRoute;
