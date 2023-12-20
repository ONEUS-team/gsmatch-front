import { useState } from "react";
import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { Link, useNavigate } from "react-router-dom";
import { Grade, Major } from "../../../types/utilType";
import { GradeConvert, MajorConvert } from "../../../types/convert";

interface Props {
  requestGrade: Grade[];
  requsetMajor: Major[] | null;
  setRequestGrade: React.Dispatch<React.SetStateAction<Grade[]>>;
  setRequestMajor: React.Dispatch<React.SetStateAction<Major[] | null>>;
}

const gradeConvert: GradeConvert = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
};

const majorConvert: MajorConvert = {
  FRONT: "프론트엔드",
  BACK: "백엔드",
  DESIGN: "디자인",
  IOS: "IOS",
  AOS: "안드로이드",
  DEVOPS: "DevOps",
  WORLD_SKILL: "기능반",
  IOT: "IOT",
  AI: "AI",
};

const MajorRequestSelect: React.FC<Props> = ({
  requestGrade,
  requsetMajor,
  setRequestGrade,
  setRequestMajor,
}) => {
  const navigate = useNavigate();
  const [grades, setGrades] = useState([
    { grade: "모두", isSelect: true },
    { grade: "ONE", isSelect: false },
    { grade: "TWO", isSelect: false },
    { grade: "THREE", isSelect: false },
  ]);

  const [majors, setMajors] = useState([
    { major: "FRONT", isSelect: false },
    { major: "BACK", isSelect: false },
    { major: "DESIGN", isSelect: false },
    { major: "IOS", isSelect: false },
    { major: "AOS", isSelect: false },
    { major: "DEVOPS", isSelect: false },
    { major: "IOT", isSelect: false },
    { major: "AI", isSelect: false },
    { major: "WORLD_SKILL", isSelect: false },
  ]);

  const changeGrade = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: string = e.currentTarget.id;

    const newGrades =
      ID === "모두"
        ? grades.map((g) =>
            g.grade == ID ? { ...g, isSelect: true } : { ...g, isSelect: false }
          )
        : grades.map((g) =>
            g.grade == ID
              ? { ...g, isSelect: !g.isSelect }
              : typeof g.grade === "string"
              ? { ...g, isSelect: false }
              : g
          );

    if (ID !== "모두") {
      const newRequestGrade = newGrades.filter((g) => g.isSelect === true);

      setRequestGrade(newRequestGrade.map((g) => g.grade) as Grade[]);
    } else {
      setRequestGrade(["ONE", "TWO", "THREE"]);
    }
    setGrades(newGrades);
  };

  const changeMajor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: string = e.currentTarget.id;
    const newMajors = majors.map((m) =>
      m.major === ID ? { ...m, isSelect: !m.isSelect } : m
    );
    const newMajorValue = newMajors.filter((m) => {
      return m.isSelect === true;
    });
    setRequestMajor(newMajorValue.map((m) => m.major) as Major[]);
    setMajors(newMajors);
  };

  const nextPage = () =>
    requestGrade !== null && requsetMajor?.length !== 0 && requsetMajor
      ? navigate("/request/write")
      : alert("모두 선택해 주세요");

  return (
    <S.Container>
      <S.Wrapper>
        <S.MiddleContainer>
          <S.TextItem>어떤 사람에게 보내고 싶나요?</S.TextItem>
          <S.SubTextItem>
            같은 유형의 학년 성별에게 요청이 보내져요
          </S.SubTextItem>
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
                    {grade.grade === "모두" ? (
                      <>{grade.grade}</>
                    ) : (
                      <>{gradeConvert[grade.grade as Grade]}학년</>
                    )}
                  </S.SelectButton>
                );
              })}
            </S.SelectContainer>
          </S.GradeContainer>
          <S.MajorContainer>
            <S.SelectText>
              전공
              <S.RefText>*복수 선택 가능합니다</S.RefText>
            </S.SelectText>
            <S.SelectContainer>
              {majors.map((major) => {
                return (
                  <S.SelectButton
                    key={major.major}
                    isSelect={major.isSelect}
                    id={major.major}
                    onClick={changeMajor}
                  >
                    {majorConvert[major.major as Major]}
                  </S.SelectButton>
                );
              })}
            </S.SelectContainer>
          </S.MajorContainer>
          <S.LinkContainer>
            <Link to="/request">
              <S.LinkText>
                <I.RequestBackIcon />
                이전 페이지로 이동하기
              </S.LinkText>
            </Link>
          </S.LinkContainer>
        </S.MiddleContainer>
        <S.Button onClick={nextPage}>
          요청 쓰기
          <I.ArrowButtonIcon />
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default MajorRequestSelect;
