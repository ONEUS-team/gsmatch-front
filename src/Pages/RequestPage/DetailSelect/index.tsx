import { useParams } from "react-router-dom";
import * as C from "../../../components/index";
import * as T from "../../../types/request";

interface Props {
  requestGender: T.requestGender[];
  requsetMajor: T.requestMajor[] | null;
  requestGrade: T.requestGrade[];
  setRequestGender: React.Dispatch<React.SetStateAction<T.requestGender[]>>;
  setRequestMajor: React.Dispatch<
    React.SetStateAction<T.requestMajor[] | null>
  >;
  setRequestGrade: React.Dispatch<React.SetStateAction<T.requestGrade[]>>;
}

const DetailSelect: React.FC<Props> = ({
  requestGender,
  requsetMajor,
  requestGrade,
  setRequestGender,
  setRequestMajor,
  setRequestGrade,
}) => {
  const { requestType } = useParams();
  if (requestType === "genre") {
    return (
      <C.GenreRequsetSelect
        requestGender={requestGender}
        requestGrade={requestGrade}
        setRequestGender={setRequestGender}
        setRequestGrade={setRequestGrade}
      />
    );
  } else if (requestType === "major") {
    return (
      <C.MajorRequsetSelect
        requestGrade={requestGrade}
        requsetMajor={requsetMajor}
        setRequestGrade={setRequestGrade}
        setRequestMajor={setRequestMajor}
      />
    );
  }
};

export default DetailSelect;
