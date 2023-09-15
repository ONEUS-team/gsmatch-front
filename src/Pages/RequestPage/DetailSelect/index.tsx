import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

const DetailSelect = () => {
  const { request } = useParams();
  return (
    <div>
      {request}
      <Outlet />
    </div>
  );
};

export default DetailSelect;
