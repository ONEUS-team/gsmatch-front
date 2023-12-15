import { ReactNode } from "react";

const PrivateRoute = ({ element }: { element: ReactNode }) => {
  // const [isLoggedin, setIsLoggedin] = useState(true);

  // if ("login".includes("login")) {
  //   setIsLoggedin(true);
  // }

  // return isLoggedin ? element : <Navigate to="/main"></Navigate>;
  return element;
};

export default PrivateRoute;
