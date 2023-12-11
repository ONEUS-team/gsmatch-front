import { useState } from "react";
import * as S from "./style";
import * as I from "../../Assets/svg/index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [usernameValue, setUsernameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isHide, setIsHide] = useState<boolean>(true);

  const navigate = useNavigate();

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameValue(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const loginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(
        "https://port-0-gsmatch-back-f02w2almh8gdgs.sel5.cloudtype.app/api/auth/login",
        {
          username: usernameValue,
          password: passwordValue,
        }
      )
      .then((response) => {
        localStorage.clear();
        localStorage.setItem(
          "Access-Token",
          response.headers.authorization.replace("Bearer", "")
        );
        localStorage.setItem(
          "Refresh-Token",
          response.headers["refresh-token"].replace("Bearer", "")
        );
        navigate("/");
      })
      .catch(() => {});
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
          <S.InputText>이름</S.InputText>
          <S.InputItem //
            value={usernameValue}
            onChange={changeName}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputText>비밀번호</S.InputText>
          <S.InputItem
            type={isHide ? "password" : "text"}
            value={passwordValue}
            onChange={changePassword}
          />
          <S.PasswordToggleButton onClick={toggleIsHide}>
            {isHide ? <I.PasswordBlindIcon /> : <I.PasswordShowIcon />}
          </S.PasswordToggleButton>
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
