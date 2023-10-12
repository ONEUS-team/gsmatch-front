import { useParams } from "react-router-dom";
import * as C from "../../../components/index";

const DetailSelect = () => {
  const { request } = useParams();
  if (request === "genre") {
    return <C.GenreRequsetSelect />;
  } else if (request === "major") {
    return <C.MajorRequsetSelect />;
  }
};

export default DetailSelect;
