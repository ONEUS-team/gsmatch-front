import { useEffect, useState } from "react";
import { usePreventLeave } from "../../hooks/usePreventLeave";
import * as S from "./style";
import * as I from "../../Assets/svg/index";
import * as T from "../../types/studentInfo";
import { Link, Route, Routes } from "react-router-dom";

export default function SignupPage() {
  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [checkpasswordValue, setCheckPasswordValue] = useState<string>("");
  const [gradeValue, setGradeValue] = useState<T.Grade>(0);
  const [genderValue, setGenderValue] = useState<T.Gender>(0);
  const [majorValue, setMajorValue] = useState<T.Major[]>([]);
  const [passwordHide, setPasswordHide] = useState<boolean>(true);
  const [checkPasswordHide, setCheckPasswordHide] = useState<boolean>(true);
  const [grades, setGrades] = useState([
    { grade: 1, isSelect: false },
    { grade: 2, isSelect: false },
    { grade: 3, isSelect: false },
  ]);

  const [genders, setGenders] = useState([
    { gender: "남자", isSelect: false },
    { gender: "여자", isSelect: false },
  ]);

  const [majors, setMajors] = useState([
    { major: "프론트엔드", isSelect: false },
    { major: "백엔드", isSelect: false },
    { major: "디자이너", isSelect: false },
    { major: "IOS", isSelect: false },
    { major: "안드로이드", isSelect: false },
    { major: "DevOps", isSelect: false },
    { major: "기능반", isSelect: false },
    { major: "IOT", isSelect: false },
    { major: "AI", isSelect: false },
  ]);

  const { enablePrevent, disablePrevent } = usePreventLeave();

  useEffect(() => {
    enablePrevent();
  }, []);

  const changeGrade = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: T.Grade = e.currentTarget.id as unknown as T.Grade;
    setGradeValue(ID);
    const newGrades = grades.map((g) =>
      g.grade === Number(ID)
        ? { ...g, isSelect: true }
        : { ...g, isSelect: false }
    );
    setGrades(newGrades);
  };

  const changeGender = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: T.Gender = e.currentTarget.id as unknown as T.Gender;
    setGenderValue(ID);
    const newGenders = genders.map((g) =>
      g.gender === ID ? { ...g, isSelect: true } : { ...g, isSelect: false }
    );
    setGenders(newGenders);
  };

  const changeMajor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: T.Major = e.currentTarget.id as unknown as T.Major;
    if (majorValue.indexOf(ID) > -1) {
      const newMajors = majors.map((major) =>
        major.major === ID ? { major: ID, isSelect: false } : major
      );
      setMajors(newMajors);
      setMajorValue(majorValue.filter((major) => major !== ID));
    } else if (majorValue.indexOf(ID) === -1) {
      const newMajors = majors.map((major) =>
        major.major === ID ? { major: ID, isSelect: true } : major
      );
      setMajors(newMajors);
      setMajorValue((currentVlaue) => [...currentVlaue, ID]);
    }
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
        <Link to="/login" onClick={() => disablePrevent()}>
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
                        key={g.grade}
                        id={g.grade.toString()}
                        isSelect={g.isSelect}
                        onClick={changeGrade}
                      >
                        {g.grade}학년
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
                      <S.SelectButton
                        key={g.gender}
                        id={g.gender}
                        onClick={changeGender}
                        isSelect={g.isSelect}
                      >
                        {g.gender}
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
                      <S.SelectButton
                        key={m.major}
                        id={m.major}
                        onClick={changeMajor}
                        isSelect={m.isSelect}
                      >
                        {m.major}
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
