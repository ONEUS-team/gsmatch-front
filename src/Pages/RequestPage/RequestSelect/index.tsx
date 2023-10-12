import { useState } from "react";
import * as I from "../../../Assets/svg/index";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function RequestSelect() {
  const [select, setSelect] = useState("");
  const navigate = useNavigate();

  const handleRequestClick = (e: React.MouseEvent) => {
    setSelect(e.currentTarget.id);
  };

  const nextPage = () => {
    if (select) {
      navigate(`/request/${select}`);
    } else {
      alert("보낼 요청을 선택하세요");
    }
  };

  return (
    <S.Container>
      <S.TextItem>어떤 요청을 보낼까요?</S.TextItem>
      <S.SubTextItem>요청은 최대 3개까지 보낼 수 있어요!</S.SubTextItem>
      <S.SelectForm>
        <S.SelectItem isSelect={select === "genre" ? true : false}>
          <S.Icon
            src="src\Assets\png\Heart.png"
            alt="유형사진"
            id="genre"
            onClick={handleRequestClick}
            isSelect={select === "genre" ? true : false}
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
        <S.SelectItem isSelect={select === "major" ? true : false}>
          <S.Icon
            src="src\Assets\png\Hat.png"
            alt="전공사진"
            id="major"
            onClick={handleRequestClick}
            isSelect={select === "major" ? true : false}
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
}
