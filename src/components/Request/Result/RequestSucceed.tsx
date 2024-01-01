import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { useNavigate } from "react-router-dom";

import Succeed from "../../../Assets/png/succeedImg.png";

const RequestSucceed = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Wrapper>
        <S.Img src={Succeed} />
        <S.TextItem>요청이 성공적으로 보내졌어요! </S.TextItem>
        <S.SucceedButton onClick={() => navigate("/")}>
          나가기
          <I.ArrowButtonIcon />
        </S.SucceedButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default RequestSucceed;
