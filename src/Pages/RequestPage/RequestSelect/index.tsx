import * as I from "../../../Assets/svg/index";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import * as T from "../../../types/request";

interface Props {
  requestType: T.requestType | null;
  setRequestType: React.Dispatch<React.SetStateAction<T.requestType | null>>;
}

const RequestSelect: React.FC<Props> = ({ requestType, setRequestType }) => {
  const navigate = useNavigate();

  const handleRequestClick = (e: React.MouseEvent) => {
    setRequestType(e.currentTarget.id as T.requestType);
  };

  const nextPage = () => {
    if (requestType) {
      navigate(`/request/${requestType}`);
    } else {
      alert("보낼 요청을 선택하세요");
    }
  };

  return (
    <S.Container>
      <S.TextItem>어떤 요청을 보낼까요?</S.TextItem>
      <S.SubTextItem>요청은 최대 3개까지 보낼 수 있어요!</S.SubTextItem>
      <S.SelectForm>
        <S.SelectItem isSelect={requestType === "genre" ? true : false}>
          <S.Icon
            src="src\Assets\png\Heart.png"
            alt="유형사진"
            id="genre"
            onClick={handleRequestClick}
            isSelect={requestType === "genre" ? true : false}
          />
          <S.SelectTitle>유형</S.SelectTitle>
          <S.SelectInfo>
            같은 유형인
            <br />
            사람들에게
            <br />
            요청을 보내요
          </S.SelectInfo>
        </S.SelectItem>
        <S.SelectItem isSelect={requestType === "major" ? true : false}>
          <S.Icon
            src="src\Assets\png\Hat.png"
            alt="전공사진"
            id="major"
            onClick={handleRequestClick}
            isSelect={requestType === "major" ? true : false}
          />
          <S.SelectTitle>전공</S.SelectTitle>
          <S.SelectInfo>
            같은 전공인
            <br />
            사람들에게
            <br />
            요청을 보내요
          </S.SelectInfo>
        </S.SelectItem>
      </S.SelectForm>
      <S.Button onClick={nextPage}>
        다음
        <I.ArrowButtonIcon />
      </S.Button>
    </S.Container>
  );
};

export default RequestSelect;
