import { useState } from "react";
import * as S from "./style";
import * as T from "../../../types/studentInfo";
import * as I from "../../../Assets/svg/index";
import { Link, useNavigate } from "react-router-dom";

const MajorRequestSelect = () => {
  const [gradeValue, setGradeValue] = useState<T.Grade | null>(null);
  const [majorValue, setMajorValue] = useState<T.Major[] | null>(null);
  const navigate = useNavigate();

  const [grades, setGrades] = useState([
    { grade: 1, isSelect: false },
    { grade: 2, isSelect: false },
    { grade: 3, isSelect: false },
  ]);

  const [majors, setMajors] = useState([
    { major: "프론트엔드", isSelect: false },
    { major: "백엔드", isSelect: false },
    { major: "디자이너", isSelect: false },
    { major: "IOS", isSelect: false },
    { major: "안드로이드", isSelect: false },
    { major: "DevOps", isSelect: false },
    { major: "IOT", isSelect: false },
    { major: "AI", isSelect: false },
    { major: "기능반", isSelect: false },
  ]);

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

  const changeMajor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: T.Major = e.currentTarget.id as unknown as T.Major;
    const newMajors = majors.map((m) =>
      m.major === ID ? { ...m, isSelect: !m.isSelect } : m
    );
    const newMajorValue = newMajors.filter((m) => {
      return m.isSelect === true && m.major;
    });
    setMajorValue(newMajorValue.map((m) => m.major) as T.Major[]);
    setMajors(newMajors);
  };

  const nextPage = () =>
    gradeValue !== null && majorValue?.length !== 0
      ? navigate("/request/write")
      : alert("모두 선택해 주세요");

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
        <S.MajorContainer>
          <S.SelectText>전공</S.SelectText>
          <S.SelectContainer>
            {majors.map((major) => {
              return (
                <S.SelectButton
                  key={major.major}
                  isSelect={major.isSelect}
                  id={major.major}
                  onClick={changeMajor}
                >
                  {major.major}
                </S.SelectButton>
              );
            })}
          </S.SelectContainer>
        </S.MajorContainer>
        <Link to="/request">
          <S.LinkContainer>
            <S.LinkText>
              <I.RequestBackIcon />
              이전 페이지로 이동하기
            </S.LinkText>
          </S.LinkContainer>
        </Link>
      </S.MiddleContainer>
      <S.Button onClick={nextPage}>
        요청 쓰기
        <I.ArrowButtonIcon />
      </S.Button>
    </S.Container>
  );
};

export default MajorRequestSelect;
