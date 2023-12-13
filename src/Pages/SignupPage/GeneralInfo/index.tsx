/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import * as S from "./style";
import { GoBackIcon } from "../../../Assets/svg";
import { Input, BlindInput } from "../../../components";
import { useNavigate } from "react-router-dom";

interface Props {
  signupName: string;
  signupEmail: string;
  signupPassword: string;
  signupCheckPassword: string;
  setSignupName: React.Dispatch<React.SetStateAction<string>>;
  setSignupEmail: React.Dispatch<React.SetStateAction<string>>;
  setSignupPassword: React.Dispatch<React.SetStateAction<string>>;
  setSignupCheckPassword: React.Dispatch<React.SetStateAction<string>>;
}

const index: React.FC<Props> = ({
  signupName,
  signupEmail,
  signupPassword,
  signupCheckPassword,
  setSignupName,
  setSignupEmail,
  setSignupPassword,
  setSignupCheckPassword,
}) => {
  const navigate = useNavigate();
  const emailRegex = /^[sS][0-9]{5}@gsm\.hs\.kr$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z0-9@#$!%^&*]{8,20}$/;

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ID = e.target.id;
    const newValue = e.target.value;

    switch (ID) {
      case "name":
        setSignupName(newValue);
        break;

      case "email":
        setSignupEmail(newValue);
        break;

      case "password":
        setSignupPassword(newValue);
        break;

      case "checkPassword":
        setSignupCheckPassword(newValue);
    }
  };

  const goToNextPage = () => {
    const nameMatch = signupName.length >= 2 && signupName.length <= 4;
    const emailMatch = signupEmail.length > 0 && emailRegex.test(signupEmail);
    const passwordMatch =
      signupPassword.length > 8 && passwordRegex.test(signupPassword);
    const checkPasswordMatch = signupCheckPassword == signupPassword;

    if (nameMatch && emailMatch && passwordMatch && checkPasswordMatch) {
      navigate("/signup/next");
    } else {
      alert("형식을 맞게 채웠는지 확인해주세요");
    }
  };

  return (
    <S.Container>
      <S.BackContainer>
        <S.BackLink to="/login">
          <GoBackIcon />
        </S.BackLink>
        <S.TextContainer>회원가입</S.TextContainer>
      </S.BackContainer>
      <S.FormContainer>
        <Input
          id="name"
          value={signupName}
          changeFunction={changeValue}
          type="text"
        >
          이름
        </Input>
        <Input
          id="email"
          value={signupEmail}
          changeFunction={changeValue}
          type="email"
          isMatch={signupEmail.length > 0 ? emailRegex.test(signupEmail) : true}
        >
          학교 이메일
        </Input>

        <BlindInput
          id="password"
          value={signupPassword}
          changeFunction={changeValue}
          isMatch={
            signupPassword.length > 0
              ? passwordRegex.test(signupPassword)
              : true
          }
        >
          비밀번호
        </BlindInput>
        <BlindInput
          id="checkPassword"
          value={signupCheckPassword}
          changeFunction={changeValue}
          isMatch={
            signupCheckPassword.length > 0
              ? signupCheckPassword == signupPassword
              : true
          }
        >
          비밀번호 재확인
        </BlindInput>
        {/* <S.IncorrectBox>{}</S.IncorrectBox> */}
        <S.Button onClick={goToNextPage}>다음</S.Button>
      </S.FormContainer>
    </S.Container>
  );
};

export default index;
