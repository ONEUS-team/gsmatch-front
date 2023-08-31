import * as S from "./style";
import { HeaderLogo } from "../../Assets/svg";
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { PasswordHideIcon, PasswordShowIcon } from "../../Assets/svg/index";

export default function LoginPage() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isHide, setIsHide] = useState<boolean>(true);

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const loginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const clickHideButton = () => {
    setIsHide(!isHide);
  };

  return (
    <S.Container>
      <S.LogoContainer>
        <HeaderLogo />
      </S.LogoContainer>
      <S.FormContainer onSubmit={loginFormSubmit}>
        <S.InputContainer>
          <S.InputText>이메일</S.InputText>
          <S.InputItem type="text" value={emailValue} onChange={changeEmail} />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputText>비밀번호</S.InputText>
          <S.PasswrdContainer>
            <S.InputItem
              type={isHide ? "password" : "text"}
              value={passwordValue}
              onChange={changePassword}
            />
            <S.PasswrdToggleButton onClick={clickHideButton}>
              {isHide ? <PasswordHideIcon /> : <PasswordShowIcon />}
            </S.PasswrdToggleButton>
          </S.PasswrdContainer>
        </S.InputContainer>
        <S.Button>로그인</S.Button>
      </S.FormContainer>
      <S.SignupContainer>
        <S.SignupText>GSMATCH가 처음이라면?</S.SignupText>
        <Link to="/signup">회원가입</Link>
      </S.SignupContainer>
    </S.Container>
  );
}
