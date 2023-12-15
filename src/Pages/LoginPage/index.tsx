import { useState } from "react";
import * as S from "./style";
import * as I from "../../Assets/svg/index";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/api/axiosInstance";

export default function LoginPage() {
  const [nameValue, setNameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isHide, setIsHide] = useState<boolean>(true);
  const navigate = useNavigate();

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const loginFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    await login({ username: nameValue, password: passwordValue });
    setIsDisabled(false);
  };

  const toggleIsHide = () => {
    setIsHide(!isHide);
  };

  const login = async (body: { username: string; password: string }) => {
    try {
      const { headers } = await axiosInstance.post("/api/auth/login", body);
      const accessToken = headers.authorization.replace("Bearer ", "");
      const refreshToken = headers["refresh-token"].replace("Bearer ", "");
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      navigate("/");
    } catch (e) {
      alert(e);
    }
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
            type="name"
            value={nameValue}
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
        <S.Button disabled={isDisabled}>로그인</S.Button>
      </S.FormContainer>
      <S.SignupContainer>
        <S.SignupText>GSMATCH가 처음이라면?</S.SignupText>
        <Link to="/signup">회원가입</Link>
      </S.SignupContainer>
    </S.Container>
  );
}
