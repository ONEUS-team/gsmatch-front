import * as S from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as I from "../../Assets/svg";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/api/axiosInstance";
import { BlindInput } from "../../components";
import { Input } from "../../components";

export default function LoginPage() {
  const [nameValue, setNameValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);
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

  const login = async (body: { username: string; password: string }) => {
    try {
      const { headers } = await axiosInstance.post("/api/auth/login", body);
      const accessToken = headers.authorization.replace("Bearer ", "");
      const refreshToken = headers["refresh-token"].replace("Bearer ", "");
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      navigate("/");
    } catch (e) {
      //
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.LogoContainer>
          <I.HeaderLogo />
        </S.LogoContainer>
        <S.FormContainer onSubmit={loginFormSubmit}>
          <Input
            value={nameValue}
            type="name"
            changeFunction={changeName}
            id="name"
          >
            이름
          </Input>
          <BlindInput
            value={passwordValue}
            id="password"
            changeFunction={changePassword}
          >
            비밀번호
          </BlindInput>
          <S.Button disabled={isDisabled}>로그인</S.Button>
        </S.FormContainer>
        <S.SignupContainer>
          <S.SignupText>GSMATCH가 처음이라면?</S.SignupText>
          <Link to="/signup">회원가입</Link>
        </S.SignupContainer>
      </S.Wrapper>
    </S.Container>
  );
}
