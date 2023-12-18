import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { useNavigate } from "react-router-dom";

const RequestSucceed = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Img src="../../src/Assets/png/succeedimg.png" />
      <S.TextItem>요청이 성공적으로 보내졌어요! </S.TextItem>
      <S.SucceedButton onClick={() => navigate("/")}>
        나가기
        <I.ArrowButtonIcon />
      </S.SucceedButton>
    </S.Container>
  );
};

export default RequestSucceed;
