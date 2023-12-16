import { useState } from "react";
import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { Link, useNavigate } from "react-router-dom";
import { Gender, Grade } from "../../../types/utilType";
import { GenderConvert, GradeConvert } from "../../../types/convert";

interface Props {
  requestGender: Gender[];
  requestGrade: Grade[];
  setRequestGender: React.Dispatch<React.SetStateAction<Gender[]>>;
  setRequestGrade: React.Dispatch<React.SetStateAction<Grade[]>>;
}

const gradeConvert: GradeConvert = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
};

const genderConvert: GenderConvert = {
  MALE: "남자",
  FEMALE: "여자",
};

const GenreRequsetSelect: React.FC<Props> = ({
  requestGender,
  requestGrade,
  setRequestGender,
  setRequestGrade,
}) => {
  const navigate = useNavigate();

  const [grades, setGrades] = useState([
    { grade: "모두", isSelect: true },
    { grade: "ONE", isSelect: false },
    { grade: "TWO", isSelect: false },
    { grade: "THREE", isSelect: false },
  ]);

  const [genders, setGenders] = useState([
    { gender: "모두", isSelect: true },
    { gender: "MALE", isSelect: false },
    { gender: "FEMALE", isSelect: false },
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

  const changeGender = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: string = e.currentTarget.id;

    const newGenders = genders.map((g) =>
      g.gender === ID ? { ...g, isSelect: true } : { ...g, isSelect: false }
    );

    if (ID !== "모두") {
      const newRequestGender = newGenders.filter((g) => g.isSelect === true);
      setRequestGender(newRequestGender.map((g) => g.gender) as Gender[]);
    } else {
      setRequestGender(["MALE", "FEMALE"]);
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
                  <>{gradeConvert[grade.grade as Grade]}학년</>
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
                {gender.gender === "모두"
                  ? gender.gender
                  : genderConvert[gender.gender as Gender]}
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
