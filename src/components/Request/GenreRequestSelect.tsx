import { useState } from "react";
import * as S from "./style";
import * as T from "../../types/studentInfo";
import * as I from "../../Assets/svg/index";
import { Link } from "react-router-dom";

const GenreRequsetSelect = () => {
  const [gradeValue, setGradeValue] = useState<T.Grade>(0);
  const [genderValue, setGenderValue] = useState<T.Gender>(0);

  const [grades, setGrades] = useState([
    { grade: 1, isSelect: false },
    { grade: 2, isSelect: false },
    { grade: 3, isSelect: false },
  ]);

  const [genders, setGenders] = useState([
    { gender: "남자", isSelect: false },
    { gender: "여자", isSelect: false },
  ]);

  const changeGrade = (e: React.MouseEvent<HTMLDivElement>) => {
    const ID: T.Grade = e.currentTarget.id as unknown as T.Grade;
    setGradeValue(ID);
    const newGrades = grades.map((g) =>
      g.grade === Number(ID)
        ? { ...g, isSelect: true }
        : { ...g, isSelect: false }
    );
    setGrades(newGrades);
  };

  const changeGender = (e: React.MouseEvent<HTMLDivElement>) => {
    const ID: T.Gender = e.currentTarget.id as unknown as T.Gender;
    setGenderValue(ID);
    const newGenders = genders.map((g) =>
      g.gender === ID ? { ...g, isSelect: true } : { ...g, isSelect: false }
    );
    setGenders(newGenders);
  };

  return (
    <S.Container>
      <S.MiddleContainer>
        <S.TextItem>어떤 사람에게 보내고 싶나요?</S.TextItem>
        <S.SubTextItem>같은 유형의 학년 성별에게 요청이 보내져요</S.SubTextItem>
        <S.GradeContainer>
          <S.SelectText>학년</S.SelectText>
          <S.SelectContainer>
            {grades.map((grade) => {
              return (
                <S.SelectButton
                  key={grade.grade}
                  id={grade.grade.toString()}
                  isSelect={grade.isSelect}
                  onClick={changeGrade}
                >
                  {grade.grade}학년
                </S.SelectButton>
              );
            })}
          </S.SelectContainer>
        </S.GradeContainer>
        <S.GenderContainer>
          <S.SelectText>성별</S.SelectText>
          <S.SelectContainer>
            {genders.map((gender) => {
              return (
                <S.SelectButton
                  key={gender.gender}
                  isSelect={gender.isSelect}
                  id={gender.gender}
                  onClick={changeGender}
                >
                  {gender.gender}
                </S.SelectButton>
              );
            })}
          </S.SelectContainer>
        </S.GenderContainer>
        <Link to="/request">
          <S.LinkContainer>
            <S.LinkText>
              <I.RequestBackIcon />
              이전 페이지로 이동하기
            </S.LinkText>
          </S.LinkContainer>
        </Link>
      </S.MiddleContainer>
      <Link to="/request/write">
        <S.Button>
          요청 쓰기
          <I.ArrowButtonIcon />
        </S.Button>
      </Link>
    </S.Container>
  );
};

export default GenreRequsetSelect;
