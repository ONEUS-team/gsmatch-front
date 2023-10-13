import { useState } from "react";
import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { Link, useNavigate } from "react-router-dom";
import * as T from "../../../types/request";

interface Props {
  requestGender: T.requestGender[];
  requestGrade: T.requestGrade[];
  setRequestGender: React.Dispatch<React.SetStateAction<T.requestGender[]>>;
  setRequestGrade: React.Dispatch<React.SetStateAction<T.requestGrade[]>>;
}

const GenreRequsetSelect: React.FC<Props> = ({
  requestGender,
  requestGrade,
  setRequestGender,
  setRequestGrade,
}) => {
  const navigate = useNavigate();

  const [grades, setGrades] = useState([
    { grade: "모두", isSelect: true },
    { grade: 1, isSelect: false },
    { grade: 2, isSelect: false },
    { grade: 3, isSelect: false },
  ]);

  const [genders, setGenders] = useState([
    { gender: "모두", isSelect: true },
    { gender: "남자", isSelect: false },
    { gender: "여자", isSelect: false },
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

  const changeGender = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: string = e.currentTarget.id;

    const newGenders = genders.map((g) =>
      g.gender === ID ? { ...g, isSelect: true } : { ...g, isSelect: false }
    );

    if (ID !== "모두") {
      const newRequestGender = newGenders.filter((g) => g.isSelect === true);
      setRequestGender(
        newRequestGender.map((g) => g.gender) as T.requestGender[]
      );
    } else {
      setRequestGender(["남자", "여자"]);
    }
    setGenders(newGenders);
  };

  const nextPage = () =>
    requestGrade !== null && requestGender !== null
      ? navigate("/request/write")
      : alert("모두 선택해주세요");

  return (
    <S.Container>
      <S.MiddleContainer>
        <S.TextItem>어떤 사람에게 보내고 싶나요?</S.TextItem>
        <S.SubTextItem>같은 유형의 학년 성별에게 요청이 보내져요</S.SubTextItem>
        <S.GradeContainer>
          <S.SelectText>학년</S.SelectText>
          <S.SelectContainer>
            {grades.map((grade) => (
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
            ))}
          </S.SelectContainer>
        </S.GradeContainer>
        <S.GenderContainer>
          <S.SelectText>성별</S.SelectText>
          <S.SelectContainer>
            {genders.map((gender) => (
              <S.SelectButton
                key={gender.gender}
                isSelect={gender.isSelect}
                id={gender.gender}
                onClick={changeGender}
              >
                {gender.gender}
              </S.SelectButton>
            ))}
          </S.SelectContainer>
        </S.GenderContainer>
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

export default GenreRequsetSelect;
