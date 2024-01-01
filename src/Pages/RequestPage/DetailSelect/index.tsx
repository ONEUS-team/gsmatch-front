import { useParams } from "react-router-dom";
import * as C from "../../../components";
import { Gender, Grade, Major } from "../../../types/utilType";

interface Props {
  requestGender: Gender[];
  requsetMajor: Major[] | null;
  requestGrade: Grade[];
  setRequestGender: React.Dispatch<React.SetStateAction<Gender[]>>;
  setRequestMajor: React.Dispatch<React.SetStateAction<Major[] | null>>;
  setRequestGrade: React.Dispatch<React.SetStateAction<Grade[]>>;
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
  if (requestType === "type") {
    return (
      <C.GenreRequsetSelect
        requestGender={requestGender}
        requestGrade={requestGrade}
        setRequestGender={setRequestGender}
        setRequestGrade={setRequestGrade}
      />
    );
  } else if (requestType === "study") {
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
