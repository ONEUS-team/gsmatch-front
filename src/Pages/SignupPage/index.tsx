import { useEffect, useState } from "react";
import { usePreventLeave } from "../../hooks/usePreventLeave";
import * as S from "./style";
import * as I from "../../Assets/svg/index";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [checkpasswordValue, setCheckPasswordValue] = useState<string>("");
  const [passwordHide, setPasswordHide] = useState<boolean>(true);
  const [checkPasswordHide, setCheckPasswordHide] = useState<boolean>(true);

  const { enablePrevent } = usePreventLeave();

  useEffect(() => {
    enablePrevent();
  }, []);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ID = e.target.id;
    switch (ID) {
      case "name":
        setNameValue(e.target.value);
        break;

      case "email":
        setEmailValue(e.target.value);
        break;

      case "password":
        setPasswordValue(e.target.value);
        break;

      case "checkPassword":
        setCheckPasswordValue(e.target.value);
    }
  };

  return (
    <S.Container>
      <S.BackContainer>
        <Link to="/">
          <I.GoBackIcon />
        </Link>
        <S.TextContainer>회원가입</S.TextContainer>
      </S.BackContainer>

      <S.FormContainer>
        <S.InputContainer>
          <S.InputText>이름</S.InputText>
          <S.InputItem
            type="text"
            id="name"
            value={nameValue}
            onChange={changeValue}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.InputText>학교 이메일</S.InputText>
          <S.InputItem
            type="email"
            id="email"
            value={emailValue}
            onChange={changeValue}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.InputText>비밀번호</S.InputText>
          <S.PasswrdContainer>
            <S.InputItem
              type={passwordHide ? "password" : "text"}
              id="password"
              value={passwordValue}
              onChange={changeValue}
            />
            <S.PasswrdToggleButton>
              {passwordHide ? <I.PasswordHideIcon /> : <I.PasswordShowIcon />}
            </S.PasswrdToggleButton>
          </S.PasswrdContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.InputText>비밀번호 재확인</S.InputText>
          <S.PasswrdContainer>
            <S.InputItem
              type={checkPasswordHide ? "password" : "text"}
              id="checkPassword"
              value={checkpasswordValue}
              onChange={changeValue}
            />
            <S.PasswrdToggleButton>
              {checkPasswordHide ? (
                <I.PasswordHideIcon />
              ) : (
                <I.PasswordShowIcon />
              )}
            </S.PasswrdToggleButton>
          </S.PasswrdContainer>
        </S.InputContainer>
        <Link to="/">
          <S.NextButton>다음</S.NextButton>
        </Link>
      </S.FormContainer>
    </S.Container>
  );
}
