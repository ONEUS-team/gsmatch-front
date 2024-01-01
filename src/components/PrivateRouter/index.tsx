<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: any) => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  useEffect(() => {
    setIsLoggedin(true);
  }, []);

  return isLoggedin ? element : <Navigate to="/main"></Navigate>;
=======
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }: { element: ReactNode }) => {
  return localStorage.getItem("accessToken") ? (
    element
  ) : (
    <Navigate to="/login" />
  );
>>>>>>> develop
};

export default PrivateRoute;
