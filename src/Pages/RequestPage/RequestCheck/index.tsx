import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { useNavigate } from "react-router-dom";

const RequestCheck = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(`/request/finish/succeed`);
  };

  return (
    <S.Container>
      <S.MessegeIconContainer>
        <I.MessegeIcon />
      </S.MessegeIconContainer>
      <S.MainText>
        13명의 사람들에게
        <br />
        요청을 보낼 수 있어요!
      </S.MainText>
      <S.LinkTextContainer>
        <S.LinkTextItem onClick={handleBtnClick}>
          랜덤으로 한명에게만 보내기
        </S.LinkTextItem>
        <I.CheckArrowIcon />
      </S.LinkTextContainer>
      <S.ExplainText>*특수 요청으로 보내집니다</S.ExplainText>
      <S.Button onClick={handleBtnClick}>
        보내기
        <I.ArrowButtonIcon />
      </S.Button>
    </S.Container>
  );
};

export default RequestCheck;
