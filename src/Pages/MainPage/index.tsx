import { ArrowHeadIcon, MainPageLogo } from "../../Assets/svg";
import * as S from "./style";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleText>사람과 사람을 연결시키다</S.TitleText>
        <S.SubTitleText>GSMATCH</S.SubTitleText>
        <Link to="/login">
          <S.ButtonContainer>
            <S.LoginPageButton>로그인 하러 가기</S.LoginPageButton>
            <ArrowHeadIcon />
          </S.ButtonContainer>
        </Link>
      </S.TitleContainer>
      <MainPageLogo />
    </S.Container>
  );
}
