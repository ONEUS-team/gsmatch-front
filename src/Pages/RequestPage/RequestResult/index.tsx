import { useParams } from "react-router-dom";
import * as C from "../../../components/index";

const RequestResult = () => {
  const { result } = useParams();

  if (result === "succeed") {
    return <C.RequestSucceed />;
  } else if (result === "failed") {
    return <C.RequestFailed />;
  }
};

export default RequestResult;
