import React, { useEffect, useState } from "react";
import * as S from "./style";
import { GoBackIcon } from "../../../Assets/svg";
import { useNavigate } from "react-router-dom";

interface Props {
  signupName: string;
  signupEmail: string;
  signupPassword: string;
  signupCheckPassword: string;
  signupGrade: string | null;
  signupGender: string | null;
  signupMajor: string | null;
  setSignupGrade: React.Dispatch<React.SetStateAction<string | null>>;
  setSignupGender: React.Dispatch<React.SetStateAction<string | null>>;
  setSignupMajor: React.Dispatch<React.SetStateAction<string | null>>;
}

const MajorInfo: React.FC<Props> = ({
  signupName,
  signupEmail,
  signupPassword,
  signupCheckPassword,
  signupGrade,
  signupGender,
  signupMajor,
  setSignupGrade,
  setSignupGender,
  setSignupMajor,
}) => {
  const navigate = useNavigate();
  const emailRegex = /^[sS][0-9]{5}@gsm\.hs\.kr$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z0-9@#$!%^&*]{8,20}$/;

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

  const changeGrade = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: string = e.currentTarget.id;

    const newGrades = grades.map((g) =>
      g.grade === Number(ID)
        ? { ...g, isSelect: true }
        : { ...g, isSelect: false }
    );

    setSignupGrade(ID);
    setGrades(newGrades);
  };

  const changeGender = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: string = e.currentTarget.id;

    const newGenders = genders.map((g) =>
      g.gender === ID ? { ...g, isSelect: true } : { ...g, isSelect: false }
    );

    setSignupGender(ID);
    setGenders(newGenders);
  };

  const changeMajor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: string = e.currentTarget.id;

    const newMajors = majors.map((m) =>
      m.major === ID ? { ...m, isSelect: true } : { ...m, isSelect: false }
    );

    setSignupMajor(ID);
    setMajors(newMajors);
  };

  const goToNextPage = () => {
    if (signupGender !== null && signupGrade !== null && signupMajor !== null)
      alert("성공");
    else alert("실패");
  };

  const checkGeneralInfo = () => {
    const nameMatch = signupName.length >= 2 && signupName.length <= 4;
    const emailMatch = signupEmail.length > 0 && emailRegex.test(signupEmail);
    const passwordMatch =
      signupPassword.length > 8 && passwordRegex.test(signupPassword);
    const checkPasswordMatch = signupCheckPassword == signupPassword;

    const isMatch =
      nameMatch && emailMatch && passwordMatch && checkPasswordMatch;

    if (!isMatch) {
      navigate("/signup");
    }
  };

  useEffect(() => {
    checkGeneralInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.BackContainer>
        <S.BackLink to="/login">
          <GoBackIcon />
        </S.BackLink>
        <S.TextContainer>회원가입</S.TextContainer>
      </S.BackContainer>
      <S.SelectForm>
        <S.SelectContainer>
          <S.SelectText>학년</S.SelectText>
          <S.SelectBox>
            {grades.map((g) => (
              <S.SelectButton
                key={g.grade}
                id={g.grade.toString()}
                isSelect={g.isSelect}
                onClick={changeGrade}
              >
                {g.grade}학년
              </S.SelectButton>
            ))}
          </S.SelectBox>
        </S.SelectContainer>
        <S.SelectContainer>
          <S.SelectText>성별</S.SelectText>
          <S.SelectBox>
            {genders.map((g) => (
              <S.SelectButton
                key={g.gender}
                id={g.gender}
                onClick={changeGender}
                isSelect={g.isSelect}
              >
                {g.gender}
              </S.SelectButton>
            ))}
          </S.SelectBox>
        </S.SelectContainer>
        <S.SelectContainer>
          <S.SelectText>전공</S.SelectText>
          <S.SelectBox>
            {majors.map((m) => (
              <S.SelectButton
                key={m.major}
                id={m.major}
                onClick={changeMajor}
                isSelect={m.isSelect}
              >
                {m.major}
              </S.SelectButton>
            ))}
          </S.SelectBox>
        </S.SelectContainer>
      </S.SelectForm>
      <S.Button onClick={goToNextPage}>다음</S.Button>
    </S.Container>
  );
};

export default MajorInfo;