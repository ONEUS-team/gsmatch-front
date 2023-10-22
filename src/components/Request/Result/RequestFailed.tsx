import * as S from "./style";
import * as I from "../../../Assets/svg/index";

const RequestFailed = () => {
  return (
    <S.Container>
      <S.IconContainer>
        <I.MailIcon />
      </S.IconContainer>
      <S.TextItem>요청을 받을 수 있는 사람이 없어요</S.TextItem>
      <S.SubTextItem>조건을 다시 정해보세요</S.SubTextItem>
      <S.FailedButton>
        다시 보내기
        <I.ArrowButtonIcon />
      </S.FailedButton>
    </S.Container>
  );
};

export default RequestFailed;
