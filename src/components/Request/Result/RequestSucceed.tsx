import * as S from "./style";
import * as I from "../../../Assets/svg/index";

const RequestSucceed = () => {
  return (
    <S.Container>
      <S.TextItem>요청이 성공적으로 보내졌어요! </S.TextItem>
      <S.SucceedButton>
        나가기
        <I.ArrowButtonIcon />
      </S.SucceedButton>
    </S.Container>
  );
};

export default RequestSucceed;
