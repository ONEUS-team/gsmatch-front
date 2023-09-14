import { useState } from "react";
import * as S from "./style";
import * as I from "../../Assets/svg/index";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isHide, setIsHide] = useState<boolean>(true);

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const loginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const toggleIsHide = () => {
    setIsHide(!isHide);
  };

  return (
    <S.Container>
      <S.LogoContainer>
        <I.HeaderLogo />
      </S.LogoContainer>
      <S.FormContainer onSubmit={loginFormSubmit}>
        <S.InputContainer>
          <S.InputText>이메일</S.InputText>
          <S.InputItem //
            type="email"
            value={emailValue}
            onChange={changeEmail}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputText>비밀번호</S.InputText>
          <S.PasswordContainer>
            <S.InputItem
              type={isHide ? "password" : "text"}
              value={passwordValue}
              onChange={changePassword}
            />
            <S.PasswordToggleButton onClick={toggleIsHide}>
              {isHide ? <I.PasswordHideIcon /> : <I.PasswordShowIcon />}
            </S.PasswordToggleButton>
          </S.PasswordContainer>
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
