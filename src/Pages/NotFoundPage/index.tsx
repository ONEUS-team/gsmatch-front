import NotFoundIcon from "../../Assets/svg/NotFoundIcon";
import * as S from "./style";

export default function NotFoundPage() {
  return (
    <S.NotFoundContainer>
      <NotFoundIcon />
      <S.NotFoundBox>
        <S.NotFoundTitle>
          <S.HighLight>404 </S.HighLight>
          ERROR
        </S.NotFoundTitle>
        <S.NotFoundSubTitle>
          페이지와의 MATCH가 불가능 합니다.
        </S.NotFoundSubTitle>
        <S.NotFoundContent>
          페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다. <br />
          입력하신 주소가 정확한지 다시 한 번 확인 해주세요.
        </S.NotFoundContent>
      </S.NotFoundBox>
    </S.NotFoundContainer>
  );
}
