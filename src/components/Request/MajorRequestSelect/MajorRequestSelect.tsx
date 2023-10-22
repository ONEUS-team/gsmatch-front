import { useState } from "react";
import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { Link, useNavigate } from "react-router-dom";
import * as T from "../../../types/request";

interface Props {
  requestGrade: T.requestGrade[];
  requsetMajor: T.requestMajor[] | null;
  setRequestGrade: React.Dispatch<React.SetStateAction<T.requestGrade[]>>;
  setRequestMajor: React.Dispatch<
    React.SetStateAction<T.requestMajor[] | null>
  >;
}

const MajorRequestSelect: React.FC<Props> = ({
  requestGrade,
  requsetMajor,
  setRequestGrade,
  setRequestMajor,
}) => {
  const navigate = useNavigate();
  const [grades, setGrades] = useState([
    { grade: "모두", isSelect: true },
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

      setRequestGrade(newRequestGrade.map((g) => g.grade) as T.requestGrade[]);
    } else {
      setRequestGrade(["1", "2", "3"]);
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
    setRequestMajor(newMajorValue.map((m) => m.major) as T.requestMajor[]);
    setMajors(newMajors);
  };

  const nextPage = () =>
    requestGrade !== null && requsetMajor?.length !== 0
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
                  {grade.grade === "모두" ? (
                    <>{grade.grade}</>
                  ) : (
                    <>{grade.grade}학년</>
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
                  {major.major}
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
    </S.Container>
  );
};

export default MajorRequestSelect;
