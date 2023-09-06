import { useEffect, useState } from "react";
import { usePreventLeave } from "../../hooks/usePreventLeave";
import * as S from "./style";
import * as I from "../../Assets/svg/index";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [nameValue, setnameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [checkpasswordValue, setcheckPasswordValue] = useState<string>("");
  const [isHide, setIsHide] = useState<boolean>(true);

  const { enablePrevent } = usePreventLeave();

  useEffect(() => {
    enablePrevent();
  }, []);

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
          <S.InputItem></S.InputItem>
        </S.InputContainer>

        <S.InputContainer>
          <S.InputText>학교 이메일</S.InputText>
          <S.InputItem></S.InputItem>
        </S.InputContainer>

        <S.InputContainer>
          <S.InputText>비밀번호</S.InputText>
          <S.PasswrdContainer>
            <S.InputItem
              type={isHide ? "password" : "text"}
              value={passwordValue}
            />
            <S.PasswrdToggleButton>
              {isHide ? <I.PasswordHideIcon /> : <I.PasswordShowIcon />}
            </S.PasswrdToggleButton>
          </S.PasswrdContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.InputText>비밀번호 재확인</S.InputText>
          <S.PasswrdContainer>
            <S.InputItem
              type={isHide ? "password" : "text"}
              value={passwordValue}
            />
            <S.PasswrdToggleButton>
              {isHide ? <I.PasswordHideIcon /> : <I.PasswordShowIcon />}
            </S.PasswrdToggleButton>
          </S.PasswrdContainer>
        </S.InputContainer>
      </S.FormContainer>
    </S.Container>
  );
}
