import { useNavigate } from "react-router-dom";
import { ArrowButtonIcon, ThumbMessageIcon } from "../../../Assets/svg";
import * as S from "./style";
import { useEffect } from "react";
import axios from "axios";

interface Props {
  signupName: string;
  signupEmail: string;
  signupPassword: string;
  signupCheckPassword: string;
  signupGrade: string;
  signupGender: string;
  signupMajor: string;
}

// const signup = () => {};

const Result: React.FC<Props> = ({
  signupName,
  signupEmail,
  signupPassword,
  signupCheckPassword,
  signupGrade,
  signupGender,
  signupMajor,
}) => {
  const navigate = useNavigate();
  const handleButtonClick = () => navigate("/login");

  useEffect(() => {}, []);

  return (
    <S.Container>
      <S.IconBox>
        <ThumbMessageIcon />
      </S.IconBox>
      <S.MainText>회원가입을 성공적으로 마쳤어요!</S.MainText>
      <S.SubText>이제 공통점을 가진 사람들과 이야기를 나눠볼까요?</S.SubText>
      <S.Button onClick={handleButtonClick}>
        이야기 나누러 가기
        <ArrowButtonIcon />
      </S.Button>
    </S.Container>
  );
};

export default Result;
