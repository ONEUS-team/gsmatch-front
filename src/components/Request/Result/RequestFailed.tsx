import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { useNavigate } from "react-router-dom";

const RequestFailed = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Wrapper>
        <S.IconContainer>
          <I.MailIcon />
        </S.IconContainer>
        <S.TextItem>요청을 받을 수 있는 사람이 없어요</S.TextItem>
        <S.SubTextItem>조건을 다시 정해보세요</S.SubTextItem>
        <S.FailedButton onClick={() => navigate("/request")}>
          다시 보내기
          <I.ArrowButtonIcon />
        </S.FailedButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default RequestFailed;
