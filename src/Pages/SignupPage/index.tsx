import { useEffect, useState } from "react";
import { usePreventLeave } from "../../hooks/usePreventLeave";
import * as S from "./style";
import * as I from "../../Assets/svg/index";
import * as T from "../../types/signup";
import { Link, Route, Routes } from "react-router-dom";

const grades = [1, 2, 3];
const genders = ["남자", "여자"];
const majors = [
  "프론트엔드",
  "백엔드",
  "디자이너",
  "IOS",
  "안드로이드",
  "DevOps",
  "기능반",
  "IOT",
  "AI",
];

export default function SignupPage() {
  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [checkpasswordValue, setCheckPasswordValue] = useState<string>("");
  const [gradeValue, setGradeValue] = useState<T.Grade>(0);
  const [genderValue, setGenderValue] = useState<T.Gender>(0);
  const [majorValue, setMajorValue] = useState<T.Major>(0);
  const [passwordHide, setPasswordHide] = useState<boolean>(true);
  const [checkPasswordHide, setCheckPasswordHide] = useState<boolean>(true);

  const { enablePrevent } = usePreventLeave();

  useEffect(() => {
    enablePrevent();
  }, []);

  const chageGrade = (e: React.MouseEvent<HTMLDivElement>) => {
    const ID: T.Grade = e.currentTarget.id as unknown as T.Grade;
    setGradeValue(ID);
  };

  const chageGender = (e: React.MouseEvent<HTMLDivElement>) => {
    const ID: T.Gender = e.currentTarget.id as unknown as T.Gender;
    setGenderValue(ID);
  };

  const chageMajor = (e: React.MouseEvent<HTMLDivElement>) => {
    const ID: T.Major = e.currentTarget.id as unknown as T.Major;
    setMajorValue(ID);
  };

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
        <Link to="/login">
          <I.GoBackIcon />
        </Link>
        <S.TextContainer>회원가입</S.TextContainer>
      </S.BackContainer>
      <Routes>
        <Route
          path="/"
          element={
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
                <S.PasswordContainer>
                  <S.InputItem
                    type={passwordHide ? "password" : "text"}
                    id="password"
                    value={passwordValue}
                    onChange={changeValue}
                  />
                  <S.PasswordToggleButton
                    onClick={() => {
                      setPasswordHide(!passwordHide);
                    }}
                  >
                    {passwordHide ? (
                      <I.PasswordHideIcon />
                    ) : (
                      <I.PasswordShowIcon />
                    )}
                  </S.PasswordToggleButton>
                </S.PasswordContainer>
              </S.InputContainer>

              <S.InputContainer>
                <S.InputText>비밀번호 재확인</S.InputText>
                <S.PasswordContainer>
                  <S.InputItem
                    type={checkPasswordHide ? "password" : "text"}
                    id="checkPassword"
                    value={checkpasswordValue}
                    onChange={changeValue}
                  />
                  <S.PasswordToggleButton
                    onClick={() => {
                      setCheckPasswordHide(!checkPasswordHide);
                    }}
                  >
                    {checkPasswordHide ? (
                      <I.PasswordHideIcon />
                    ) : (
                      <I.PasswordShowIcon />
                    )}
                  </S.PasswordToggleButton>
                </S.PasswordContainer>
              </S.InputContainer>
              <Link to="/signup/next">
                <S.NextButton>다음</S.NextButton>
              </Link>
            </S.FormContainer>
          }
        />
        <Route
          path="/next"
          element={
            <S.radioContainer>
              <S.GradeContainer>
                <S.SelectText>학년</S.SelectText>
                <S.SelectContainer>
                  {grades.map((g) => {
                    return (
                      <S.SelectButton
                        key={g}
                        id={g.toString()}
                        onClick={chageGrade}
                      >
                        {g}학년
                      </S.SelectButton>
                    );
                  })}
                </S.SelectContainer>
              </S.GradeContainer>
              <S.GenderContainer>
                <S.SelectText>성별</S.SelectText>
                <S.SelectContainer>
                  {genders.map((g) => {
                    return (
                      <S.SelectButton key={g} id={g}>
                        {g}
                      </S.SelectButton>
                    );
                  })}
                </S.SelectContainer>
              </S.GenderContainer>
              <S.MajorContainer>
                <S.SelectText>전공</S.SelectText>
                <S.SelectContainer>
                  {majors.map((m) => {
                    return (
                      <S.SelectButton key={m} id={m}>
                        {m}
                      </S.SelectButton>
                    );
                  })}
                </S.SelectContainer>
              </S.MajorContainer>
              <S.NextButton>유형검사 하러 가기</S.NextButton>
            </S.radioContainer>
          }
        />
      </Routes>
    </S.Container>
  );
}
